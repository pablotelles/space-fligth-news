import React from "react"
import { PostContent } from "./styled"
import { transformDate } from "../transformDate"
import { ModalPost } from "../../Modal/Modal"



export const Post = ({item}) => {


    return(
        <PostContent>
            <h3>{item.title}</h3>
            <div>
                <p>{transformDate(item.publishedAt)}</p>
                <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => window.open(item.url)}                                
                >NewSite</button>
            </div>
            <p>{item.summary.length > 100 ? item.summary.substring(0,100) + '...' : item.summary }</p>
            <ModalPost item={item} />
        </PostContent>
    )
}