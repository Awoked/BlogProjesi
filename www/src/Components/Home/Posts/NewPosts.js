import React, { useContext, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { PostsContext, PostsProvider } from "../../../Context/GlobalDatas";
import Loading from "../../Loading/Loading";
import Post from "../../Post/Post";



const NewPosts = ({ClassName}) => {

    const [posts, setPosts] = useState([]);

    const BlogDatas = useContext(PostsContext);


    const getBlogData = () => {
        setTimeout(() => {
            setPosts(BlogDatas.NewPostsData);
        }, 800);
    }



    useEffect(() => {
        getBlogData();
    }, [])


    return (
        <>
            {
                posts.length > 0 ? posts.map((post, index) => (
                    <Post
                        ClassName={ClassName}
                        key={index}
                        PostIndex={index}
                        AuthorName={post.AuthorName}
                        AuthorImage={post.AuthorImage}
                        PostTitle={post.PostTitle}
                        PostImage={post.PostImage}
                        ContentText={post.ContentText}
                        ContentUrl={`/blogdetails/${post.id}`}
                        PostDate={post.Date}
                        PostCategory={post.Category}
                    />
                ))
                    :
                    <Loading />
            }
        </>
    )
}

export default NewPosts;