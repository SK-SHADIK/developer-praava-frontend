import "./Styles/LoginStyle.css";
import { Helmet } from 'react-helmet';

const Login = () => {
    function showPassword() {
        var Pass = document.getElementById("pass");
        if (Pass.type === "password") {
          Pass.type = "text";
        }
        else {
          Pass.type = "password";
        }
    }  
    return(
        <div>
            <Helmet>
              <link rel="icon" href="./IMAGE/Favicon.png" />
              <title>PH API | Login</title>
            </Helmet>
            <div className="congtainer-signin-box">
               <h3 className="signin-title">Sign in</h3>
               <p className="signin-txt">Welcome to praava health api services</p>
               <form action="" className="signin-form">
                   <input type="text" className="signin-input" name="email" placeholder="Email" />
                   <input type="password" className="signin-input" name="pass" id="pass" placeholder="Password" />
                   <div className="signup-rm-pass">
                       <div className="rm">
                           <input type="checkbox" className="siginin-checkbox" /><span className="signin-rem">Remember me</span>
                       </div>
                       <div className="rm">
                           <input type="checkbox" className="siginin-checkbox" onClick={showPassword} /><span className="signin-rem">Show Password</span>
                       </div>
                    </div>

                    <button className="signin-btn">Login</button>
               </form>
           </div>
           <footer className="signin-footer">
               <svg viewBox="0 -20 700 110" width="100%" height="120" preserveAspectRatio="none">
                 <path transform="translate(0, -25)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#810054c0" />
                 <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#810054" />
               </svg>
            </footer>
        </div>
    )
}
export default Login;