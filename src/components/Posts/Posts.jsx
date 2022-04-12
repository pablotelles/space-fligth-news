import React, { useContext } from "react";
import { transformDate } from "./transformDate";
import { PostList, PostItem, PostImage, PostContent } from "./styled";
import { DataContext } from "../../contexts/dataContext";

export const Post = () => {
    const {data} = useContext(DataContext)

    return(
        <PostList>
            {data.map((item, index) => {                
                if(index%2 === 0){
                    return(
                        <PostItem key={item.id}>
                            <PostImage src={item.imageUrl} alt="post banner" />
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
                        </PostItem>
                    )
                }else{
                    return(
                        <PostItem key={item.id}>
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
                            <PostImage src={item.imageUrl} alt="post banner" />
                        </PostItem>
                    )
                }
 
            })}
        </PostList>
    )
}