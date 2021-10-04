import "./sidebar.css";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ChatIcon from "@material-ui/icons/Chat";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import GroupIcon from "@material-ui/icons/Group";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import WorkIcon from "@material-ui/icons/Work";
import EventIcon from "@material-ui/icons/Event";
import { Users } from "../../dummyData";
import { useEffect } from "react";
const Sidebar = () => {
  useEffect(() => {
    const sidebarElement = document.querySelector(".sidebar");
    sidebarElement.addEventListener("hover", () => {
      console.log("hello");
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
        <button className="sidebarShowMoreButton">Show More</button>
        <hr className="sidebarHrLine" />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <li key={user.id} className="sidebarFriendListItem">
              <img
                src={user.profilePicture?"/" + user.profilePicture:"/assets/person/no-avatar.png"}
                alt=""
                className="sidebarFriendListItemImage"
              />
              <span className="sidebarFriendListItemName">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
