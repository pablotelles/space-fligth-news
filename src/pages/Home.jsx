import React, { useState } from "react";
import { Header } from "../components/Header/Header";
import { LogoSpace } from "../components/Header/LogoSpace/LogoSpace";
import { Post } from "../components/Posts/Posts";
import { MorePosts } from "../components/Posts/MorePosts/MorePosts";

export const Home = () => {

    return(
        <div style={{display: 'grid'}}>
            <Header />
            <LogoSpace />
            <Post />
            <MorePosts />
        </div>
    )
}