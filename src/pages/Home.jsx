import React from "react";
import { Header } from "../components/Header/Header";
import { LogoSpace } from "../components/Header/LogoSpace/LogoSpace";
import { Post } from "../components/Posts/Posts";

export const Home = () => {
    return(
        <div style={{display: 'grid'}}>
            <Header />
            <LogoSpace />
            <Post />
        </div>
    )
}