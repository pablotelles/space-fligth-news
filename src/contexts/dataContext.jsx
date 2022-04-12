import React, { createContext, useEffect, useState } from "react";
import { getDataApi } from "../api/getData";

export const DataContext = createContext()

export const DataProvider = ({children}) =>{
    const [data, setData] = useState([])

    useEffect(() => {
        getDataApi(setData)
    }, [])
    console.log(data)
    return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}