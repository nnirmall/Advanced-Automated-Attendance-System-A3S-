import { Button } from '@material-ui/core';
import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import Dashboard from './Dashboard';
import { useAuth } from './AuthContext';
// import Page from './page';
import Homie from './Homie';
import Dashboard from './Dashboard';

export default function Login() {

    const { login } = useAuth();
    const navigate = useNavigate();
    const [userId, setUserID] = useState();
    const [password, setPassword] = useState();
    const [loginError, setLoginError] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    

    const handleLogin = async () => {
        try {
            const response = await fetch('https://localhost:7220/api/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    password,
                }),
            });

           if (response.ok) {
                const responseData = await response.json();
                // Check the accountType from the API response
                const accountType = responseData.accountType;
                const firstName = responseData.firstname;

                console.log('Login successful. Account Type:', accountType);

                setLoginError(null); // Clear any previous login errors
                console.log(responseData)
                // localStorage.setItem('user', responseData)
                sessionStorage.setItem('user',userId);

                setSelectedUser();
                login(responseData);
                // Redirect based on accountType
                if (accountType === 0) {
                    navigate('/dashboardAdmin');
                } else if (accountType === 1) {
                    setSelectedUser(responseData);
                } else if (accountType === 2) {
                    navigate('/dashboardStudent')
                } else {
                    console.error('Unknown account type:', accountType);
                }
            } else {
                // Handle login failure, e.g., display an error message
                console.error('Login failed');
                setLoginError('Invalid credentials. Please try again.'); // Set an error message
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="CourseContainer">
            {selectedUser ? ( // Only rendering Specfiic Course when clicked
              <Dashboard user={selectedUser} />
            ) : (
        <div className="LoginContainer" style={{
            backgroundImage: "url('./img/image.png')",
            backgroundSize: 'cover',
          }}>
            <LoginForm
                userId={userId}
                password={password}
                setUserId={setUserID}
                setPassword={setPassword}
                onLogin={handleLogin}
                loginError={loginError}
            />
        </div>
        )}
        </div>
    );
}

function LoginForm({ userId, password, setUserId, setPassword, onLogin, loginError }) {
    return (
        <div className="Loginform">
            <h1>Log In</h1>
            <form id='form'>
                <Input type="text" id="userid" name="userid" label="User ID" placeholder="L20123191" autoFocus={true} onChange={e => setUserId(e.target.value)} />
                <Input type="password" id="password" name="password" label="Password" placeholder="************" onChange={e => setPassword(e.target.value)} />
                {loginError && <div className="login-error">{loginError}</div>}
                <Button className='custom-button' onClick={onLogin}>Submit</Button>
            </form>
            <div className='register'>
                <label> Don't have an account? </label>
                <label id='registering'><Link to="/signup"> Register here!</Link></label>
            </div>
        </div>
    )
}

function Input({ type, id, name, label, placeholder, autoFocus, onChange }) {
    return (
        <label className="text-gray-500 block mt-3">{label}
            <input
                autoFocus={autoFocus}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                className="custom-input"
                onChange={onChange}
            />
        </label>
    )
}
