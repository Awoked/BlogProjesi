import React, { useContext, useEffect, useRef, useState } from "react";
import { PostsContext } from "../../Context/GlobalDatas";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { UserContext } from "../../Context/UserData";
import RoundedButton from "../../Components/Buttons/RoundedButton";
import UserBlog from "../../Components/UserBlogs/UserBlog";

const AddBlog = () => {

    const { logged, userBlogData } = useContext(UserContext);

    const [posts, setPosts] = useState([]);

    const BlogDatas = useContext(PostsContext);


    const getBlogData = () => {
        setTimeout(() => {
            setPosts(BlogDatas.NewPostsData);
        }, 1200);
    }


    useEffect(() => {
        getBlogData();
    }, [])


    const BlogTitle = useRef(null)
    const PostImage = useRef(null)
    const AuthorName = useRef(null)
    const ContentText = useRef(null)
    const Category = useRef(null)
    const date = new Date().toLocaleDateString();

    const SubmitHandler = (e) => {

        const Data = {
            AuthorName: localStorage.getItem("UserName"),
            AuthorImage: "https://picsum.photos/200",
            PostTitle: BlogTitle.current.value,
            PostImage: "https://picsum.photos/400/250",
            ContentText: ContentText.current.value,
            PostImage: "https://picsum.photos/400/250",
            Date: date,
            Category: Category.current.value
        }
        fetch("http://localhost:5000/addpost", {
            method: 'POST',
            body: JSON.stringify(Data),
            headers: new Headers({ "Content-Type": "application/json" })
        })
    }

    return (

        <section className="w-full">
            <div className="container mx-auto bg-black">
                {
                    logged ?
                        <div className="flex p-5 gap-5">
                            <div className="w-2/4 flex flex-col gap-3">
                                <h1 className="text-white font-medium text-2xl">Blog Ekle</h1>
                                <form onSubmit={SubmitHandler} >
                                    <div className="flex flex-col gap-3  w-full">
                                        <input type="text" required placeholder="blog başlığı" ref={BlogTitle} name="blogtitle" className="p-3 outline-none rounded-md" />
                                        <input type="text" required placeholder="Kategori" ref={Category} name="author" className="p-3 outline-none rounded-md" />
                                        <textarea placeholder="İçerik" name="blogcontent" required id="blogcontent" ref={ContentText} cols="30" rows="10" className="p-3 outline-none rounded-md border-none">
                                        </textarea>
                                        <input type="submit" placeholder="Ekle" className="bg-green-500 text-white font-bold w-max p-3 rounded-md hover:bg-green-600 transition-colors cursor-pointer" />
                                    </div>
                                </form>
                            </div>
                            <div className="w-2/4 text-white flex flex-col gap-3">
                                <h1 className="text-white font-medium text-2xl">Bloglarım</h1>
                                <div className="flex flex-col gap-5 ">
                                    {
                                        userBlogData.length <= 0 ?

                                            <div className="bg-indigo-500 flex  animate-pulse items-center justify-center p-5 gap-5 text-3xl">
                                                <AiOutlineLoading3Quarters className="animate-spin" />
                                                Loading
                                            </div>
                                            :
                                            userBlogData.map((data) => (
                                                <>

                                                    <UserBlog
                                                        key={data.id}
                                                        ID={data.id}
                                                        PostImage={data.PostImage}
                                                        AuthorName={data.AuthorName}
                                                        ContentText={data.ContentText}
                                                        PostTitle={data.PostTitle}
                                                    />
                                                </>
                                            ))
                                    }
                                </div>
                            </div>
                        </div>
                        :
                        <div className="text-white">
                            <div className="flex items-center justify-center flex-col gap-5 p-10">
                                <h1 className="text-3xl font-medium">Blog Oluşturmak için önce giriş yapın</h1>
                                <RoundedButton
                                    ClassProp={"bg-white text-black font-medium"}
                                    Text={"Giriş Yap"}
                                    To={"/login"}
                                />
                            </div>
                        </div>
                }
            </div>
        </section>
    )
}

export default AddBlog;