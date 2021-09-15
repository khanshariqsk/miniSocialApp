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
      <h4 className="userProfileInformationTag">User Information</h4>
      <div className="userProfileInformation">
        <div className="userProfileCity">
          <span className="userProfileCityKey">City:</span>
          <span className="userProfileCityValue">New York</span>
        </div>
        <div className="userProfileFrom">
          <span className="userProfileFromKey">From:</span>
          <span className="userProfileFromValue">Madrid</span>
        </div>
        <div className="userProfileRelationship">
          <span className="userProfileRelationshipKey">Relationship:</span>
          <span className="userProfileRelationshipValue">Single</span>
        </div>
      </div>
      <h4 className="userProfileFriendTag">User Friends</h4>
      <div className="userProfileFriends">
        <ul className="userProfileFriendList">
          {Users.map((user) => (
            <li className="userProfileFriendListItem">
              <img
                src={"/" + user?.profilePicture}
                className="userProfileFriendListImage"
                alt="profile"
              />
              <span className="userProfileFriendListName">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
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
