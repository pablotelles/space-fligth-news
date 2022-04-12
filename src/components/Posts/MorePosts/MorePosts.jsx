import React, { useContext, useState } from "react";
import { getMoreData } from "../../../api/getMoreData";
import { DataContext } from "../../../contexts/dataContext";
import { ButtonMorePost } from "./styled";

export const MorePosts = () => {
    const {data, setData} = useContext(DataContext)
    const [counter, setCounter] = useState(11)

    return(
      
            <button
            type="button"
            className="btn btn-outline-primary"
            onClick={(ev) => {
                ev.preventDefault()
                getMoreData(data, setData, counter)
                console.log(counter)
                setCounter(counter + 11)
                console.log(counter)            
            }}
            style={{
                width: '200px',
                margin: '30px auto',
            }}
            >Carregar mais</button>

    )
}