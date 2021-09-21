import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { getUserTimelineApi } from "../../utils/ApiService";

const Feed = (props) => {
  console.log(props)
  const [posts, setPosts] = useState([]);
  const userTimelineOrFriendTimeline = props?.userInfo ? props.userInfo._id:"6148f8c6bf84b38ec86ec589"
  useEffect(() => {
    const getUserTimeline = async () => {
      try {
        const userTimeline = await getUserTimelineApi(userTimelineOrFriendTimeline)
        setPosts(userTimeline.data);
      } catch (error) {}
    };
    getUserTimeline();
  }, [userTimelineOrFriendTimeline]);
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
