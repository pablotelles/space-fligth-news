import React from "react";
import { SelectionFilter } from "./style";

export const Selection = () =>{
   return(
    <SelectionFilter class="form-select" aria-label="Default select example">
        <option selected>Sort</option>
        <option value="1">Mais antigas</option>
        <option value="2">Mais recentes</option>
    </SelectionFilter>
   ) 
}