import React from "react";
import './style.css'

export const Selection = () =>{
   return(
    <select class="form-select" aria-label="Default select example">
        <option selected>Sort</option>
        <option value="1">Mais antigas</option>
        <option value="2">Mais recentes</option>
    </select>
   ) 
}