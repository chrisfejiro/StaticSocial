import React from "react";
import "./right.css";
import { Users } from "../../dummy";
import Online from "../online/Online";

const Right = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birth">
          <img src="\assets\gift.jfif" alt="" className="birthImg" />
          <span className="birthText">
            <b>Pola Foster</b> and <b> 4 other friends </b> have a birthday
            today
          </span>
        </div>
        <img src="\assets\ads.jfif" alt="" className="ad" />
        <h4 className="title">Online Friends</h4>
        <ul className="friendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightTitle">User information</h4>
        <div className="rightInfo">
          <div className="rightItem">
            <span className="rightKey">City:</span>
            <span className="rightValue">Canada</span>
          </div>
          <div className="rightItem">
            <span className="rightKey">From</span>
            <span className="rightValue">Madrid</span>
          </div>
          <div className="rightItem">
            <span className="rightKey">Relationships</span>
            <span className="rightValue">Single</span>
          </div>
        </div>
        <h4 className="rightTitle">User friends</h4>
        <div className="rightFollowers">
          <div className="rightFollowing">
            <img
              src="/assets/Person/3.jfif"
              alt=""
              className="rightFollowImg"
            />
            <span className="rightFollowingName"> Mr ibu</span>
          </div>
          <div className="rightFollowing">
            <img
              src="/assets/Person/4.jfif"
              alt=""
              className="rightFollowImg"
            />
            <span className="rightFollowingName"> Mr ibu</span>
          </div>
          <div className="rightFollowing">
            <img
              src="/assets/Person/2.jfif"
              alt=""
              className="rightFollowImg"
            />
            <span className="rightFollowingName"> Mr ibu</span>
          </div>
          <div className="rightFollowing">
            <img
              src="/assets/Person/1.jfif"
              alt=""
              className="rightFollowImg"
            />
            <span className="rightFollowingName"> Mr ibu</span>
          </div>
          <div className="rightFollowing">
            <img
              src="/assets/Person/6.jfif"
              alt=""
              className="rightFollowImg"
            />
            <span className="rightFollowingName"> Mr ibu</span>
          </div>
          <div className="rightFollowing">
            <img
              src="/assets/Person/4.jfif"
              alt=""
              className="rightFollowImg"
            />
            <span className="rightFollowingName"> Mr ibu</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="bar">
      <div className="Wrap">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Right;
