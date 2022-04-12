import React, { useContext } from "react";
import { DataContext } from "../../../contexts/dataContext";
import { SelectionFilter } from "./style";

export const FilterOrder = () =>{
    const {data, setData} = useContext(DataContext)
    
    function orderMore(){
        let NewOrder = data.sort((a,b) => {
             if(a.publishedAt > b.publishedAt){
                 return 1;
             }else {
                 return -1
             }
         })
         setData([...data], NewOrder)
     }
   return(
    <SelectionFilter class="form-select" aria-label="Default select example">
        <option selected>Sort</option>
        <option value="1" onClick={() => orderMore}>Mais antigas</option>
        <option value="2">Mais recentes</option>
    </SelectionFilter>
   ) 
}