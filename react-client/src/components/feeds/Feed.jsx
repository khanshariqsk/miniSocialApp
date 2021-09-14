import { Posts } from "../../dummyData";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => {
          return (
            <Post
              id={post.id}
              image={post.photo}
              date={post.date}
              like={post.like}
              comment={post.comment}
              desc={post.desc}
              key={post.id}
              userId={post.userId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
