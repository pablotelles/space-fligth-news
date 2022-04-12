import React, { useContext } from "react";
import { getMoreData } from "../../../api/getMoreData";
import { DataContext } from "../../../contexts/dataContext";

export const MorePosts = () => {
    const {data, setData} = useContext(DataContext)
    let counter = 3
  
    return(
        <button
        onClick={(ev) => {
            ev.preventDefault()
            getMoreData(data, setData)
         }}
        >Carregar mais</button>
    )
}