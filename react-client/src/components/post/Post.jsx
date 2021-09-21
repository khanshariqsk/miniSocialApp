import "./post.css";
import { useEffect, useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { getUserByIdApi } from "../../utils/ApiService";

const Post = (props) => {
  const { image, date, like, comment, desc, userId } = props;
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUserByID = async () => {
      try {
        const userDetails = await getUserByIdApi(userId)
        setUser(userDetails.data.others);
      } catch (error) {}
    };
    getUserByID();
  }, [userId]);
  console.log(user);
  const commentOrComments = parseInt(comment) > 1 ? "comments" : "comment";
  const [likeCount, setLikeCount] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const likeCounterHandler = () => {
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
