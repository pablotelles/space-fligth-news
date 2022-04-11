import React from "react"
import { Selection } from "./selection/selection"
import { Search } from "./search/Search"
import './style.css'

export const Header = () => {
    return(
        <header>
            <Search />
            <Selection />
        </header>
    )
}