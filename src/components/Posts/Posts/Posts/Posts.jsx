import React, { useContext} from "react";
import { PostList, PostItem, PostImage } from "./styled";
import { DataContext } from "../../../../contexts/dataContext";
import { Post } from "../Post/Post";
import { Loader } from "../../../Loader/Loader";
import { MorePosts } from "../../MorePosts/MorePosts";


export const Posts = () => {
    const {data} = useContext(DataContext)
    let windowWidth = window.innerWidth;

    if (data.length > 1){
        return(
            <PostList>
                <hr></hr>
                {data.map((item, index) => {  
                    if(windowWidth < 500){
                        return (
                            <PostItem key={item.id}>
                                <PostImage src={item.imageUrl} alt="post banner" />
                                <Post item={item} />
                            </PostItem>
                        )
                    }else{
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
                    }       
                })}
                <MorePosts />
            </PostList>
        )
    }else{
        return(
            <Loader />
        )
    } 
}