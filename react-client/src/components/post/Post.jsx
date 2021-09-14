import "./post.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Users } from "../../dummyData";

const Post = (props) => {
  const { image, date, like, comment, desc,userId } = props;
  const currentUser = Users.find((user) => user.id === userId);
  const commentOrComments = parseInt(comment) > 1?"comments":"comment";

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={"/" + currentUser?.profilePicture}
              alt=""
              className="postProfileImage"
            />
            <span className="postUsername">{currentUser?.username}</span>
            <span className="postDate">{date}</span>
          </div>
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
            <img src="/assets/like.png" alt="" className="postLikeIcon" />
            <img src="/assets/heart.png" alt="" className="postLikeIcon" />
            <span className="postLikeCounter">{like + " people like it"}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment + " " + commentOrComments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
