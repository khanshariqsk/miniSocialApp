import "./topbar.css";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
          <span className="logo">SK SOCIALAPP</span>
      </div>
      <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon/>
              <input type="text" className="searchInput" placeholder="Search for friend,Post or Videos"/>
          </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" className="topbarImg" alt="" />
      </div>
    </div>
  );
};

export default Topbar;
