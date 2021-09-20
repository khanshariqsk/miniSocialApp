import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import "./feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getUserTimeline = async () => {
      try {
        const userTimeline = await axios.get(
          `${process.env.REACT_APP_DEV_URL}/posts/timeline/6148f8c6bf84b38ec86ec589`
        );
        setPosts(userTimeline.data);
      } catch (error) {}
    };
    getUserTimeline();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => {
          return (
            <Post
              id={post._id}
              image={post?.img}
              date={post.createdAt}
              like={post.likes}
              comment={post?.comment}
              desc={post.desc}
              key={post._id}
              userId={post.userId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
