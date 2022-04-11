import React from "react";
import { AiOutlineSearch } from "react-icons/ai";



export const Search = () => {
    return(
        <div class="input-group search">
            <div class="form-outline">
                <input
                type="search"
                id="form1"
                class="form-control"
                style={{
                    borderRadius: '5px 0 0 5px',
                }}                
                />
            </div>
            <button
            type="button"
            class="btn btn-primary
            search-icon"
            style={{
                backgroundColor: '#1E2022',
                border: 'none',
                height: '37px',
                borderRadius: '0px',
                marginRight: '10px',
            }}            
            >
                <i class="fas fa-search "><AiOutlineSearch /></i>
            </button>
        </div>
    )
}