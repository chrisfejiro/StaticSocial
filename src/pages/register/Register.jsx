import "./register.css"

const Register = () => {
  return (
    <div className="log">
      <div className="logWrap">
        <div className="logLeft">
          <h3 className="logLogo">Chris App</h3>
          <span className="logDesc">
            Connect with friends and the world around you on Chris Fejiro
          </span>
        </div>
        <div className="logRight">
          <div className="logBox">
            <input type="Username" className="logInput" />
            <input type="Email" className="logInput" />
            <input type="Password" className="logInput" />
            <input type="password Again" className="logInput" />
            <button className="logButton">Sign Up</button>
            <button className="logRegister"> Log into Account </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register