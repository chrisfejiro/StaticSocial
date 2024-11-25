import React from 'react'

const Friends = ({friend}) => {
  return (
    <div>
      <li className="leftFriend">
        <img src={friend.profilePicture} alt="" className="leftFriendImg" />
        <span className="leftFriendName">{friend.username}</span>
      </li>
    </div>
  );
}

export default Friends