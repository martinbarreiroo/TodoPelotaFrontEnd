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
import { Link } from 'react-router-dom';


export const Signup = () => {

    const [action, setAction] = useState('Sign up')
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('')  
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [position, setPosition] = useState('')


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

                {/* {action==='Sign up'?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>} */}
                
            <Link to='/Hub' className='link'>
                <div className="submit-container">
                  <div className={action==='Sign Up'?'submit gray':'submit'} 
                  onClick={()=>{
                      setAction('Sign Up');
                      const user ={name,email,password, description, position}
                      fetch('http://localhost:8080/user/add', {
                          method: 'POST',
                          headers: {
                              'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(user),
                      })
                      .then(response => response.json())
                      .then(data => {
                        if (data.success) {
                            // handle success
                        } else {
                          // handle error
                        }
                      });
                  }}
                  style={{backgroundColor: action === 'Sign Up' ? 'gray' : '#729560'}}
                  >
                    Sign Up
                  </div>
              </div>
            </Link>
            </div>
        </div>
    )
}
