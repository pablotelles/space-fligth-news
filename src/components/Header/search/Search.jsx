import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { getSearch } from "../../../api/getSearch";
import { DataContext } from "../../../contexts/dataContext";

export const Search = () => {
    const [search, setSearch] =useState('')
    const {setData} = useContext(DataContext)
    return(
        <div className="input-group search">
            <div className="form-outline">
                <input
                type="search"
                id="form1"
                className="form-control"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
                style={{
                    borderRadius: '5px 0 0 5px',
                }}                
                />
            </div>
            <button
            type="button"
            className="btn btn-primary
            search-icon"
            onClick={() => getSearch(search, setData)}
            style={{
                backgroundColor: '#1E2022',
                border: 'none',
                height: '37px',
                borderRadius: '0px',
                marginRight: '0',
            }}            
            >
                <i className="fas fa-search "><AiOutlineSearch /></i>
            </button>
        </div>
    )
}