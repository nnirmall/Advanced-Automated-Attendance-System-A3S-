// import { Button } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './Login.css';
// import Course from './Course';
// import practice from './practice';
import { Link } from 'react-router-dom';
// import Background from '../img/image.png';


export default function Login() {
    return (
        <div className="LoginContainer" style={{ 
            backgroundImage:"url('./img/image.png')",
            // fontSize:'50px',
            backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
          }}>
            <LoginForm/>
        </div>
    );
}

function LoginForm(){
    return(
        <div className="Loginform">
                <h1>Log In</h1>
                <form id='form'>                 
                    <Input type="email" id="email" name="email" label="Email Address" placeholder="Your@example.com" autofocus={true}/>
                    <Input type="password" id="password" name="password" label="Password" placeholder="************" />
                    <Link to="/dashboard"> <Button className='custom-button' value="Submit"> Submit </Button></Link>
                </form>
                <div className='register'>
                    <label > Don't have an account?  </label>
                    <label id='registering'><Link to="/signup"> Register here!</Link></label>
                </div>
        </div>
    )
}
function Input({type, id, name, label, placeholder, autofocus}) {
    return (
      <label className="text-gray-500 block mt-3">{label}
        <input
          autoFocus={autofocus}
          type={type} 
          id={id} 
          name={name} 
          placeholder={placeholder}
          className="custom-input"/>
      </label>
    )
}


