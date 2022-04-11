import React from "react";
import logo from '../../../assets/img/iconLogo.png'
import { LogoContainer, Logo } from "./style";

export const LogoSpace = () => {
    return (
        <LogoContainer className="logo-space__container">
            <Logo className="logo-space" src={logo} alt="logo" />
            <h2>Space Flight News</h2>
            <hr />
        </LogoContainer>
    )
}