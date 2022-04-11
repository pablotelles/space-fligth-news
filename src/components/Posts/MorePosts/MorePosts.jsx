import React from "react";
import { getDataApi } from "../../../api/getData";

export const MorePosts = (setData) => {
    console.log(setData)
    return(
        <button
        onClick={(setData) => getDataApi(setData)}
        >Carregar mais</button>
    )
}