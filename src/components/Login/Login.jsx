import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import show_password_icon from '../assets/show_password.png'
import logo from '../assets/logo.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

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

                    <Link to='/Hub' className='link-login'>
                        <div className="submit-container-login">
                            <div className='submit-login' 
                                onClick={() => {
                                    const user = { email, password }
                                    fetch('http://localhost:8080/user/login', {
                                                method: 'POST',
                                                headers: {
                                                        'Content-Type': 'application/json',
                                                },
                                                body: JSON.stringify(user),
                                                })
                                                .then(response => {
                                                if (!response.ok) {
                                                        throw new Error(`HTTP error! status: ${response.status}`);
                                                }
                                                return response.json();
                                                })
                                                .then(data => {
                                                if (data.success) {
                                                        // handle success
                                                } else {
                                                        // handle error
                                                }
                                                })
                                                .catch(error => {
                                                console.error('There was a problem with the fetch operation: ', error);
                                                });
                                }}
                            >
                                Log In
                            </div>
                        </div>
                    </Link>
                </div>
                                
                <div className="footer-login">Don't have an account? 
                <Link to='/Signup' className='click-here-login'>
                    <span> Click Here!</span>
                    
                </Link>
                </div>

            </div>
        </div> // Add closing curly brace here
    );
}

export default Login;