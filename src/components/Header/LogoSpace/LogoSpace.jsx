import React from "react";
import logo from '../../../assets/img/iconLogo.png'
import './style.css'

export const LogoSpace = () => {
    return (
        <div className="logo-space__container">
            <img className="logo-space" src={logo} alt="logo" />
            <h2>Space Flight News</h2>
            <hr />
        </div>
    )
}