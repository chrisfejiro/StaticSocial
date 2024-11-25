import React from 'react'
import "./left.css"
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { Users } from "../../dummy";
import Friends from "../friends/Friends"
const Left = () => {
  return (
    <div className="leftbar">
      <div className="leftWrap">
        <ul className="leftList">
          <li className="ListItem">
            <RssFeedIcon className="leftIcon" />
            <span className="leftItemText">Feed</span>
          </li>
          <li className="ListItem">
            <ChatIcon className="leftIcon" />
            <span className="leftItemText">Chats</span>
          </li>
          <li className="ListItem">
            <PlayCircleIcon className="leftIcon" />
            <span className="leftItemText">Videos</span>
          </li>
          <li className="ListItem">
            <GroupsIcon className="leftIcon" />
            <span className="leftItemText">Groups</span>
          </li>
          <li className="ListItem">
            <BookmarkIcon className="leftIcon" />
            <span className="leftItemText">Bookmarks</span>
          </li>
          <li className="ListItem">
            <HelpOutlineIcon className="leftIcon" />
            <span className="leftItemText">Questions</span>
          </li>
          <li className="ListItem">
            <WorkOutlineIcon className="leftIcon" />
            <span className="leftItemText">Jobs</span>
          </li>
          <li className="ListItem">
            <EventIcon className="leftIcon" />
            <span className="leftItemText">Events</span>
          </li>
          <li className="ListItem">
            <SchoolIcon className="leftIcon" />
            <span className="leftItemText">Courses</span>
          </li>
        </ul>
        <button className="leftButton">Show More</button>
        <hr className="leftHr" />
        <ui className="leftFriendList">
          {Users.map((u) => (
            <Friends key={u.id} friend={u} />
          ))}
        </ui>
      </div>
    </div>
  );
}

export default Left