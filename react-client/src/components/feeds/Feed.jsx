import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import {AuthContext} from '../../context/AuthContext'
import "./feed.css";
import { getUserTimelineApi } from "../../utils/ApiService";

const Feed = (props) => {
  const {user} = useContext(AuthContext)
  console.log(user)
  const [posts, setPosts] = useState([]);
  const userTimelineOrFriendTimeline = props?.userInfo ? props.userInfo._id:user.matchedUser._id
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
