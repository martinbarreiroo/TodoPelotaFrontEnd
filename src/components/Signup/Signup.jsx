import React from 'react'
import './Signup.css'
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import show_password_icon from '../assets/show_password.png'
import description_icon from '../assets/description.png'
import position_icon from '../assets/position.png'
import logo from '../assets/logo.png'
import { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';

export const Signup = () => {

    const [action, setAction] = useState('Sign up')
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('')  
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [position, setPosition] = useState('')
    const navigate = useNavigate();

    return (
        <div className=''>
            <div className="logo">
                <img src={logo} alt="" /> 
            </div>
            <div className='container'>
                <div className="header"></div>
                <div>
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
            
                <div className="inputs">
                    
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name'onChange={e => setName(e.target.value)}/>
                    </div>

                    <div className="input">
                      <img src={email_icon} alt="" />
                      <input type="email" placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="input">
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

                    <div className="input">
                      <img src={description_icon} alt="" />
                      <input type="description" placeholder='Description' onChange={e => setDescription(e.target.value)}/>        
                    </div>

                    <div className="input">
                      <img src={position_icon} alt="" />
                      <input type="position" placeholder='Position' onChange={e => setPosition(e.target.value)}/>        
                    </div>
                </div>

                <div className="footer-signup">Already have an account? 
                    <Link to='/' className='click-here-signup'>
                        <span> Log In Here!</span>
                    </Link>
                </div>

                
                <div className="submit-container">
                    <div className= 'submit'
                        onClick={async ()=>{
                            setAction('Sign Up');
                            const user ={name,email,password, description, position}
                            try {
                                const response = await fetch('http://localhost:8080/user/add', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(user),
                                });

                                if (!response.ok) {
                                    throw new Error(`HTTP error! status: ${response.status}`);
                                }

                                else if (response.ok) {
                                    navigate('/hub'); // navigate to /hub route if sign up is successful
                                }
                            } catch (error) {
                                console.error('There was a problem with the fetch operation: ', error);
                            }
                        }}
                        style={{backgroundColor: action === 'Sign Up' ? 'gray' : '#729560'}}
                    >
                        Sign Up
                    </div>
                </div>
            </div>
        </div>
    )
}
