import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
    return(
        <div className="input-group search">
            <div className="form-outline">
                <input
                type="search"
                id="form1"
                className="form-control"
                style={{
                    borderRadius: '5px 0 0 5px',
                }}                
                />
            </div>
            <button
            type="button"
            className="btn btn-primary
            search-icon"
            style={{
                backgroundColor: '#1E2022',
                border: 'none',
                height: '37px',
                borderRadius: '0px',
                marginRight: '10px',
            }}            
            >
                <i className="fas fa-search "><AiOutlineSearch /></i>
            </button>
        </div>
    )
}