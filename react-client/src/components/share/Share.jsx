import "./share.css";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import LabelIcon from "@material-ui/icons/Label";
import RoomIcon from "@material-ui/icons/Room";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
const Share = () => {
  const {user}  = useContext(AuthContext)
  const descRef = useRef()
  console.log(user)
  const createPostHandler = () => {

  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={user?'/'+user.matchedUser.profilePicture:"/assets/person/no-avatar.png"} className="shareTopImage" alt="" />
          <input
            type="text"
            placeholder="What's In your mind Shariq?"
            className="shareTopInput"
            ref={descRef}
          />
        </div>
        <hr className="shareHr" />

        <form className="shareBottom" onSubmit={createPostHandler}>
          <div className="shareOptions">
            <label className="shareOption" htmlFor="userPost">
              <PermMediaIcon htmlColor="pink" />
              <span className="shareOptionText">Photo or Video</span>
              <input type="file" id="userPost" style={{display:"none"}}className="fileSelector" />
            </label>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" />
              <span className="shareOptionText">Tags</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="green" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <div className="shareButtonContainer">
              <button className="shareButton" type="submit">Share</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
