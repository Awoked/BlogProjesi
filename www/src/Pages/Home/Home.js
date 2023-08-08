import React from "react";
import Hero from "../../Components/Home/Hero/Hero";
import Posts from "../../Components/Home/Posts/Posts";
import TrendPosts from "../../Components/Home/TrendPosts/TrendPosts";
import { PostsProvider } from "../../Context/GlobalDatas";

const Home = () => {
    return (
        <>
            <PostsProvider>
                <Hero />
                <TrendPosts />
                <Posts />
            </PostsProvider>
        </>
    )
}

export default Home;