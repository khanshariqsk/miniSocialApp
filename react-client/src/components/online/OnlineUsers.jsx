import "./onlineUsers.css";
const OnlineUsers = (props) => {
  return (
    <li className="rightbarOnlineFriendItem">
      <div className="rightbarOnlineFriendImageContainer">
        <img
          src={props?.profilePicture?"/" + props?.profilePicture:"/assets/person/no-avatar.png"}
          alt=""
          className="rightbarOnlineFriendImage"
        />
        <span className="rightbarOnlineFriendOnlineStatus"></span>
      </div>
      <span className="rightbarOnlineFriendName">{props?.username}</span>
    </li>
  );
};

export default OnlineUsers;
