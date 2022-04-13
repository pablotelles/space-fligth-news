import React, { useState } from "react";
import { Header } from "../components/Header/Header";
import { LogoSpace } from "../components/Header/LogoSpace/LogoSpace";
import { Posts } from "../components/Posts/Posts/Posts";
import { MorePosts } from "../components/Posts/MorePosts/MorePosts";

export const Home = () => {

    return(
        <div>
            <Header />
            <LogoSpace />
            <Posts />
            <MorePosts />
        </div>
    )
}