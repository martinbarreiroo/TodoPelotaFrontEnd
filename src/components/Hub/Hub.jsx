import React from 'react';
import './Hub.css';
import logo from '../assets/logo.png'
import trofeo from '../assets/trofeo.png'
import estadistica from '../assets/estadistica.png'
import person from '../assets/person.png'

export const Hub = () => {
    return (
        <div className="hub-container">
            <img src={logo} alt="Logo" className="logo" />
                
                <div className="home-menu">
                    <button className="home-button">Mis Torneos
                        <img src={trofeo} alt="trofeo" className="trofeo" />
                    </button>
                        
                    <button className="home-button">Mis Estadísticas
                        <img src={estadistica} alt="trofeo" className="estadistica" />
                    </button>
                        
                    <button className="home-button">Crear Torneo</button>
                    <button className="home-button">Perfil
                        <img src={person} alt="trofeo" className="trofeo" />
                    </button>
                        
                </div>
        </div>
    );
}

export default Hub;