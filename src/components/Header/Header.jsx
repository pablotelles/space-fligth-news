import React from "react"
import { Selection } from "./selection/selection"
import { Search } from "./search/Search"
import { HeaderStyled } from "./styled"

export const Header = () => {
    return(
        <HeaderStyled>
            <Search />
            <Selection />
        </HeaderStyled>
    )
}