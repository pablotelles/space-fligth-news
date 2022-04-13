import React, { useContext, useState } from "react";
import { getMoreData } from "../../../api/getMoreData";
import { DataContext } from "../../../contexts/dataContext";
import { MorePostsContainer } from "./styled";

export const MorePosts = () => {
    const {data, setData} = useContext(DataContext)
    const [counter, setCounter] = useState(11)

    return(
        <MorePostsContainer>
            <button
            type="button"
            className="btn btn-outline-primary"
            onClick={(ev) => {
                ev.preventDefault()
                getMoreData(data, setData, counter)
                setCounter(counter + 11)    
            }}
            style={{
                width: '200px',
                margin: '30px auto',
            }}
            >Carregar mais</button>
        </MorePostsContainer>
    )
}