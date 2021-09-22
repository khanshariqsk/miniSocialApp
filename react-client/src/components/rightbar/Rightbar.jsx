import OnlineUsers from "../online/OnlineUsers";
import "./rightbar.css";
import { Users } from "../../dummyData";
import { useEffect, useState } from "react";
import { getUserFriendsApi } from "../../utils/ApiService";

const Rightbar = (props) => {
  const [userFriends, setUserFriends] = useState([]);
  useEffect(() => {
    const getUserFriends = async () => {
      try {
        if (props?.userInfo?.following) {
          const userFriendsData = await getUserFriendsApi(
            props.userInfo.following
          );
          setUserFriends(userFriendsData);
        }
      } catch (error) {}
    };
    getUserFriends();
  }, [props?.userInfo?.following]);
  const homeRightbar = (
    <>
      <div className="rightbarBirthdayContainer">
        <img src="/assets/gift.png" alt="" className="righbarBirthdayImage" />
        <span className="righbarBirthdayText">
          <b>Umar Khan</b> and <b>3 other friends</b> have birthday today.
        </span>
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
  const profileRightbar = (
    <>
      <h4 className="userProfileInformationTag">User Information</h4>
      <div className="userProfileInformation">
        <div className="userProfileCity">
          <span className="userProfileCityKey">City:</span>
          <span className="userProfileCityValue">{props.userInfo?.city}</span>
        </div>
        <div className="userProfileFrom">
          <span className="userProfileFromKey">From:</span>
          <span className="userProfileFromValue">{props.userInfo?.from}</span>
        </div>
        <div className="userProfileRelationship">
          <span className="userProfileRelationshipKey">Relationship:</span>
          <span className="userProfileRelationshipValue">
            {props.userInfo?.relationShip}
          </span>
        </div>
      </div>
      <h4 className="userProfileFriendTag">User Friends</h4>
      <div className="userProfileFriends">
        <ul className="userProfileFriendList">
          {userFriends.map((user) => (
            <li
              className="userProfileFriendListItem"
              key={user.data.others._id}
            >
              <img
                src={"/" + user?.data.others.profilePicture}
                className="userProfileFriendListImage"
                alt="profile"
              />
              <span className="userProfileFriendListName">
                {user.data.others.userName}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
  const rightbarContent = props?.userInfo ? profileRightbar : homeRightbar;
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">{rightbarContent}</div>
    </div>
  );
};

export default Rightbar;
