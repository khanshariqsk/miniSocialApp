import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feeds/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import './profile.css'
import { useParams } from "react-router";
import { getUserByIdApi } from "../../utils/ApiService";
const Profile = () => {
  let {userId} = useParams();
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
  return (
    <>
      <Topbar></Topbar>
      <div className="profile">
        <Sidebar />
        <div className="profileContainer">
          <div className="profileTop">
            <div className="profileCover">
              <img src={'/' + user.coverPicture} alt="" className="profileCoverImg" />
              <img src={'/' + user.profilePicture} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.userName}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
         { user?._id && <div className="profileBottom">
            <Feed userInfo={user}/>
            <Rightbar userInfo={user}/>
          </div>}
        </div>
      </div>
    </>
  );
};

export default Profile;
