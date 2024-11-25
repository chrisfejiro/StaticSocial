import "./login.css"

const Login = () => {
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
                    <input type="Email" className="logInput" />
                    <input type="password" className="logInput" />
                    <button className="logButton">Log in</button>
                    <span className="logForgot">Forgot Password ?</span>
                    <button className="logRegister"> Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login