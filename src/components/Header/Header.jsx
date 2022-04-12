import React from "react"
import { FilterOrder } from "./FilterOrder/FilterOrder"
import { Search } from "./search/Search"
import { HeaderStyled } from "./styled"

export const Header = () => {
    return(
        <HeaderStyled>
            <Search />
            <FilterOrder />
        </HeaderStyled>
    )
}