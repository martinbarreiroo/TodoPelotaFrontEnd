import React from 'react';
import './Hub.css';
import logo from '../assets/logo.png'
import trofeo from '../assets/trofeo.png'
import estadistica from '../assets/estadistica.png'
import name from '../assets/person.png'
import plus from '../assets/plus.png'
import { Link } from 'react-router-dom';

export const Hub = () => {
    return (
        <div className="hub-container">
            <img src={logo} alt="Logo" className="logo" />

               <Link to="/"> 
                <div className="logout-container">
                    <button className="logout-button">Log Out</button>
                </div>
                </Link>

                <div className="home-menu">
                    <button className="home-button">Mis Torneos
                        <img src={trofeo} alt="trofeo" className="trofeo" />
                    </button>
                        
                    <button className="home-button">Mis Estadísticas
                        <img src={estadistica} alt="estadistica" className="estadistica" />
                    </button>
                        
                    <button className="home-button">Crear Torneo
                        <img src={plus} alt="trofeo" className="estadistica" />
                    </button>
                    <button className="home-button">Perfil
                        <img src={name} alt="name" className="name" />
                    </button>
                        
                </div>
        </div>
    );
}

export default Hub;