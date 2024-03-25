import React from 'react';
import './Hub.css';
import logo from '../assets/logo.png'

export const Hub = () => {
    return (
        <div className="hub-container">
            <img src={logo} alt="Logo" className="logo" />
                <div className="home-menu">
                    <button className="home-button">Mis Torneos</button>
                    <button className="home-button">Mis Estadísticas</button>
                    <button className="home-button">Crear Torneo</button>
                    <button className="home-button">Perfil</button>
                </div>
        </div>
    );
}

export default Hub;