import React from "react";
import logo from '../../../assets/img/iconLogo.png'
import { LogoContainer, Logo } from "./style";

export const LogoSpace = () => {
    return (
        <LogoContainer>
            <Logo src={logo} alt="logo" />
            <h2>Space Flight News</h2>
        </LogoContainer>
    )
}