import React, { useContext } from "react";
import { DataContext } from "../../../contexts/dataContext";
import { SelectionFilter } from "./style";
import { handlerChangeOrder } from "./hanclerChangeOrder";

export const FilterOrder = () =>{
    const {data, setData} = useContext(DataContext)

   return(
    <SelectionFilter onChange={(ev) => handlerChangeOrder(ev, data,setData)}
    className="form-select"
    aria-label="Default select example">
        <option selected>Sort</option>
        <option value="old" >Mais antigas</option>
        <option value="new">Mais recentes</option>
    </SelectionFilter>
   ) 
}