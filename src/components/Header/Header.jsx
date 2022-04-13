import React from "react"
import { FilterOrder } from "./FilterOrder/FilterOrder"
import { Search } from "./search/Search"
import { HeaderStyled } from "./styled"
import { LogoSpace } from "./LogoSpace/LogoSpace"

export const Header = () => {
    return(
        <HeaderStyled>
            <div>
                <Search />
                <FilterOrder />
            </div>
            <LogoSpace />
            <hr />
        </HeaderStyled>
    )
}