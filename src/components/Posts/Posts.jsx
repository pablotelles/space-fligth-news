import React, { useEffect, useState } from "react";
import { getDataApi } from "../../api/getData";
import { transformDate } from "./transformDate";
import { PostList, PostItem, PostImage, PostContent } from "./styled";

export const Post = () => {
    const [data, setData] = useState([])
    
    useEffect(() =>{
        getDataApi(setData)
    }, [])
    
    function orderMore(){
       data.sort((a,b) => {
            if(a.publishedAt > b.publishedAt){
                return 1;
            }else {
                return -1
            }
        })
        return data
    }
  
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
                                    class="btn btn-outline-secondary"
                                    onClick={() => window.open(item.url)}                                
                                    >NewSite</button>
                                </div>
                                <p>{item.summary.length > 100 ? item.summary.substring(0,100) + '...' : item.summary }</p>
                                <button type="button" class="btn btn-dark" onClick={() => orderMore()}>Ver mais</button>
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
                                    class="btn btn-outline-secondary"
                                    onClick={() => window.open(item.url)}                                
                                    >NewSite</button>
                                </div>
                                <p>{item.summary.length > 100 ? item.summary.substring(0,100) + '...' : item.summary }</p>
                                <button type="button" class="btn btn-dark" onClick={() => orderMore()}>Ver mais</button>
                            </PostContent>
                            <PostImage src={item.imageUrl} alt="post banner" />
                        </PostItem>
                    )
                }
 
            })}
        </PostList>
    )
}