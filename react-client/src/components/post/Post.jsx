import "./post.css";
import { useContext, useEffect, useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { getUserByIdApi, setPostLikeCountApi } from "../../utils/ApiService";
import { AuthContext } from "../../context/AuthContext";

const Post = (props) => {
  const { id, image, date, like, comment, desc, userId } = props;
  const [user, setUser] = useState({});
  const [likeCount, setLikeCount] = useState(like.length);
  const [isLiked, setIsLiked] = useState(false);
  const commentOrComments = parseInt(comment) > 1 ? "comments" : "comment";
  const { user: currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getUserByID = async () => {
      try {
        const userDetails = await getUserByIdApi(userId);
        setUser(userDetails.data.others);
      } catch (error) {}
    };
    getUserByID();
  }, [userId]);

  useEffect(() => {
    setIsLiked(like.includes(currentUser.matchedUser._id));
  }, [currentUser.matchedUser._id, like]);

  const likeCounterHandler = async () => {
    try {
      await setPostLikeCountApi(id, currentUser.matchedUser._id);
    } catch (error) {}
    setLikeCount((prevLikeCount) => {
      return isLiked ? prevLikeCount - 1 : prevLikeCount + 1;
    });
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <Link
            to={`/profile/${userId}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div className="postTopLeft">
              <img
                src={"/" + user?.profilePicture}
                alt=""
                className="postProfileImage"
              />
              <span className="postUsername">{user?.userName}</span>
              <span className="postDate">{format(date)}</span>
            </div>
          </Link>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCaption">{desc}</span>
          <img src={"/" + image} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/like.png"
              alt=""
              className="postLikeIcon"
              onClick={likeCounterHandler}
            />
            <img src="/assets/heart.png" alt="" className="postLikeIcon" />
            <span className="postLikeCounter">
              {likeCount + " people like it"}
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {comment + " " + commentOrComments}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
