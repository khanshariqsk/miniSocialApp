import OnlineUsers from "../online/OnlineUsers";
import "./rightbar.css";
import { Users } from "../../dummyData";

const Rightbar = (props) => {
  const homeRightbar = (
    <>
      <div className="rightbarBirthdayContainer">
        <img src="/assets/gift.png" alt="" className="righbarBirthdayImage" />
        <span className="righbarBirthdayText">
          <b>Umar Khan</b> and <b>3 other friends</b> have birthday today.
        </span>
      </div>
      <div className="rightbarAdds">
        <img src="/assets/ad.png" alt="" className="rightAdvertisementImage" />
      </div>
      <h4>Online Friends</h4>
      <ul className="rightbarOnlineFriendList">
        {Users.map((user) => (
          <OnlineUsers
            id={user.id}
            profilePicture={user.profilePicture}
            username={user.username}
            key={user.id}
          />
        ))}
      </ul>
    </>
  );
  const profileRighbar = (
    <>
      <h1>hello my profile!</h1>
    </>
  );
  const rightbarContent = props?.profile ? profileRighbar : homeRightbar;
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">{rightbarContent}</div>
    </div>
  );
};

export default Rightbar;
