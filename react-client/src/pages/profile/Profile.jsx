import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feeds/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import './profile.css'
const Profile = () => {
  return (
    <>
      <Topbar></Topbar>
      <div className="profile">
        <Sidebar />
        <div className="profileContainer">
          <div className="profileTop">
            <div className="profileCover">
              <img src="/assets/post/2.jpeg" alt="" className="profileCoverImg" />
              <img src="/assets/person/1.jpeg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Shariq khan</h4>
                <span className="profileInfoDesc">Hello Im Coder!</span>
            </div>
          </div>
          <div className="profileBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
