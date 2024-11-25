import React from 'react'
import "./top.css"
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Top = () => {
  return (
    <>
      <div className="topBar">
        <div className="topLeft">
          <span className="logo">ChrisApp</span>
        </div>
        <div className="topCenter">
          <div className="search">
            <SearchIcon className="searchIcon " />
            <input
              placeholder="Search for friend ,video or post"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topRight">
          <div className="topLinks">
            <span className="topLink">HomePage</span>
            <span className="topLink">TimeLine</span>
          </div>
          <div className="topIcons">
            <div className="topIconItem">cd
              <PersonIcon />
              <span className="topIconNumber"> 1 </span>
            </div>
            <div className="topIconItem">
              <ChatIcon />
              <span className="topIconNumber"> 2 </span>
            </div>
            <div className="topIconItem">
              <NotificationsIcon />
              <span className="topIconNumber"> 4 </span>
            </div>
          </div>
          <img src="\assets\Person\1.jfif" alt="" className="topImg" />
        </div>
      </div>
    </>
  );
}

export default Top