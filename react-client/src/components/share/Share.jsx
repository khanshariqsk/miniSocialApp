import "./share.css";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import LabelIcon from "@material-ui/icons/Label";
import RoomIcon from "@material-ui/icons/Room";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" className="shareTopImage" alt="" />
          <input
            type="text"
            placeholder="What's In your mind Shariq?"
            className="shareTopInput"
          />
        </div>
        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="pink" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
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
              <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
