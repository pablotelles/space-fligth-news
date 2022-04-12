import React, { useContext, useState } from "react";
import { getMoreData } from "../../../api/getMoreData";
import { DataContext } from "../../../contexts/dataContext";

export const MorePosts = () => {
    const {data, setData} = useContext(DataContext)
    const [counter, setCounter] = useState(11)

    return(
        <button
        onClick={(ev) => {
            ev.preventDefault()
            getMoreData(data, setData, counter)
            console.log(counter)
            setCounter(counter + 11)
            console.log(counter)            
         }}
        >Carregar mais</button>
    )
}