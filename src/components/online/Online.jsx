import "./online.css"

const Online = ({user}) => {
  return (
    <div>
      <li className="friend">
        <div className="imgProfileContainer">
          <img src={user.profilePicture} alt="" className="imgProfile" />
          <span className="online"></span>
        </div>
        <span className="username">{user.username}</span>
      </li>
    </div>
  );
}

export default Online