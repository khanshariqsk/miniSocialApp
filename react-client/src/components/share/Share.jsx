import "./share.css";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import LabelIcon from "@material-ui/icons/Label";
import RoomIcon from "@material-ui/icons/Room";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { createUserPostApi, getUserByIdApi } from "../../utils/ApiService";
const Share = () => {
 
  const { user,dispatch } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const descRef = useRef();
  console.log(user);
  const createPostHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file',file)
    formData.append('userId',user.matchedUser._id)
    formData.append('desc',descRef.current.value)
    try {
      const userFile = await createUserPostApi(formData)
      if(userFile){
        // let detail = await getUserByIdApi(user.matchedUser._id)
        // dispatch({ type: "LOGIN_RESPONSE", payload: {matchedUser:detail.data.others}});
        // console.log(detail,user)
        // window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user
                ? "/" + user.matchedUser.profilePicture
                : "/assets/person/no-avatar.png"
            }
            className="shareTopImage"
            alt=""
          />
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
              <input
                type="file"
                id="userPost"
                style={{ display: "none" }}
                className="fileSelector"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
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
            <button className="shareButton" type="submit">
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
