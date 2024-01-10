import {useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import '../styles/login.css';
import Navbar from "../components/Navbar.jsx"

const Login = ()=> {

  const preUsername = 'Suraj';  // static username and password..
  const prePassword = '1234';

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(preUsername === username && prePassword === password){
      console.log(username,password);
      navigate('/dashboard');
    }
    else{
      console.log('username or password is wrong');
    }

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="root">
        <div className="details"></div>

        <div className="form">
          <div className="contact-container">
            <h2>User Login</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">User Name</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e)=>{setUsername(e.target.value)}}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                type="password"
                  id="password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required
                />
              </div>
              <button type="submit">Submit</button>
              <Link to="#"><p className="forget--password"><u>Forget Password ?</u></p></Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default Login;