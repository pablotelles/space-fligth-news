import React from "react"
import { PostContent } from "./styled"
import { transformDate } from "./transformDate"

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
            <button type="button" className="btn btn-dark">Ver mais</button>
        </PostContent>
    )
}