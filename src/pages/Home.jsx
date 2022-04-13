import { Header } from "../components/Header/Header";
import { Posts } from "../components/Posts/Posts/Posts";
import { MorePosts } from "../components/Posts/MorePosts/MorePosts";


export const Home = () => {

    return(
        <div>
            <Header />
            <Posts />
            <MorePosts />
         </div>
    )
}