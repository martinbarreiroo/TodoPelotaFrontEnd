import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import show_password_icon from '../assets/show_password.png'
import logo from '../assets/logo.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <div className=''>
            <div className="logo">
                <img src={logo} alt="" /> 
            </div>
            <div className='container-login'>
                <div className="header-login">

                    <div className="text-login">Log In</div>
                    <div className="underline-login"></div>

                </div>

                <div className="inputs-login">
                    <div className="input-login">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="input-login">
                        <img src={password_icon} alt="" />
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            placeholder='Password' 
                            onChange={e => setPassword(e.target.value)}
                        />
                        <img 
                            src={show_password_icon} 
                            alt="Toggle password visibility" 
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>

                    <div className='submit-login' 
                        onClick={async () => {
            
                            const token = btoa(`${email}:${password}`); // Base64 encode the email and password
                            try {
                                const response = await fetch('http://localhost:8080/authentication/api/check-authentication', {
                                    method: 'GET',
                                    headers: {
                                        'Authorization': token,
                                    },
                                });

                                if (!response.ok) {
                                    throw new Error(`HTTP error! status: ${response.status}`);
                                }

                                const isAuthenticated = await response.json();

                                if (isAuthenticated) {
                                    navigate('/Hub'); // navigate to /Hub route if authentication is successful
                                } else {
                                    throw new Error('Authentication failed');
                                }
                            } catch (error) {
                                console.error('There was a problem with the fetch operation: ', error);
                            }
                        }}
                    >
                        Log In
                    </div>
                </div>
                                
                <div className="footer-login">Don't have an account? 
                    <Link to='/Signup' className='click-here-login'>
                        <span> Click Here!</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Login;