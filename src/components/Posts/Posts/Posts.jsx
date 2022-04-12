import React, { useContext } from "react";
import { PostList, PostItem, PostImage } from "./styled";
import { DataContext } from "../../../contexts/dataContext";
import { Post } from "./Post";

export const Posts = () => {
    const {data} = useContext(DataContext)

    return(
        <PostList>
            {data.map((item, index) => {                
                if(index%2 === 0){
                    return(
                        <PostItem key={item.id}>
                            <PostImage src={item.imageUrl} alt="post banner" />
                            <Post item={item} />
                        </PostItem>
                    )
                }else{
                    return(
                    <PostItem key={item.id}>
                        <Post item={item} />
                        <PostImage src={item.imageUrl} alt="post banner" />
                    </PostItem>
                    )
                } 
            })}
        </PostList>
    )
}