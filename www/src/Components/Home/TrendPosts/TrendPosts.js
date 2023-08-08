import React, { useContext, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { PostsContext } from "../../../Context/GlobalDatas";
import Loading from "../../Loading/Loading";
import PostCard from "./PostCard";

const TrendPosts = () => {

    const BlogDatas = useContext(PostsContext);

    const [trendDatas, setTrendDatas] = useState([]);

    useEffect(() => {
        setTrendDatas(BlogDatas.TrendPostsData)
    }, [])

    return (
        <section className="py-12 border-b border-gray-300">
            <div className="container mx-auto">
                <div className="wrapper flex flex-col gap-4">
                    <div className="section-title text-base font-bold">
                        <h3>TRENDING ON LARGE</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            trendDatas.length > 0 ?
                                trendDatas.map((item, index) => (
                                    <PostCard
                                        key={index}
                                        AuthorName={item.AuthorName}
                                        AuthorImage={item.AuthorImage}
                                        Content={item.Content}
                                        PostDate={item.PostDate}
                                        Index={index}
                                    />
                                ))
                                :
                                <Loading />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrendPosts;