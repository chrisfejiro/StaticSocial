import React from 'react'
import "./give.css"
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoodIcon from "@mui/icons-material/Mood";
const Give = () => {
  return (
    <div className="give">
      <div className="giveWrap">
        <div className="giveTop">
          <img src="/assets/Person/3.jfif" alt="" className="giveDisplayImg" />
          <input
            placeholder="What's in your mind safak? "
            className="giveInput"
          />
        </div>
        <hr className="giveHr" />
        <div className="giveBottom">
          <div className="giveOptions">
            <div className="giveOption">
              <PermMediaIcon htmlColor='tomato'  className="giveIcon" />
              <span className="giveOptionText">Photo or Video</span>
            </div>
            <div className="giveOption">
              <LabelIcon htmlColor='blue' className="giveIcon" />
              <span className="giveOptionText">Tag</span>
            </div>
            <div className="giveOption">
              <LocationOnIcon htmlColor='green' className="giveIcon" />
              <span className="giveOptionText">Location</span>
            </div>
            <div className="giveOption">
              <MoodIcon htmlColor='goldenrod' className="giveIcon" />
              <span className="giveOptionText">Feelings</span>
            </div>
          </div>
          <button className="giveButton">Share</button>
        </div>
      </div>
    </div>
  );
}
    
export default Give