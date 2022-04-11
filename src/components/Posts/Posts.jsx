import React, { useEffect, useState } from "react";
import { getDataApi } from "../../api/getData";
import './style.css'

export const Post = () => {
    const [data, setdata] = useState([])
   
    useEffect(() =>{
        getDataApi(setdata)
    }, [])
    
    return(
        <div className="posts-list">
            {data.map((item, index) => {
                return(
                    <div className="post__item" key={item.id}>
                        <img className="post__image" src={item.imageUrl} alt="post banner" />
                        <div>
                            <h3>{item.title}</h3>
                            <div className="post__item--infos">
                                <p>{Date(item.publishedAt)}</p>
                                <button>newSite</button>
                            </div>
                            <p>{item.summary.length > 100 ? item.summary.substring(0,100) + '...' : item.summary }</p>
                            <button>Ver mais</button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}