import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import './style.css'


export const Search = () => {
    return(
        <div class="input-group search">
            <div class="form-outline">
                <input type="search" id="form1" class="form-control" />
            </div>
            <button type="button" class="btn btn-primary search-icon">
                <i class="fas fa-search "><AiOutlineSearch /></i>
            </button>
        </div>
    )
}