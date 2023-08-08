import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorSmall from "../Author/AuthorSmall";

const Post = ({ClassName, PostTitle, PostImage, AuthorName, AuthorImage, ContentText, ContentUrl, PostDate, PostCategory, PostIndex }) => {

    const [showPost, setShowPost] = useState(false);

    useEffect(() => {
        let Time = (Number(`${PostIndex}000`) / 4);
        setTimeout(() => {
            setShowPost(true);
        }, Time);
    }, [])

    return (
        <>
            <div className={ (showPost ? " !opacity-100 " : "  ") + "post flex justify-between opacity-0 gap-5 items-center duration-500 transition-all " + ClassName}>
                <div className="post-content flex flex-col gap-2 w-full">
                    <div className="author flex gap-3">
                        <AuthorSmall
                            AuthorName={AuthorName}
                            AuthorImage={AuthorImage}
                        />
                    </div>
                    <div className="title text-2xl font-bold">
                        <h3>
                            <Link reloadDocument to={ContentUrl}>
                                {PostTitle}
                            </Link>
                        </h3>
                    </div>
                    <div className="content text-gray-600">
                        <p>
                            <Link reloadDocument to={ContentUrl}>
                                {ContentText}
                            </Link>
                        </p>
                    </div>
                    <div className="information text-sm text-gray-600 flex gap-3 items-center">
                        <span>
                            {PostDate}
                        </span>
                        <span className="p-1 px-2 bg-gray-300 text-[#757575] rounded-full">
                            {PostCategory}
                        </span>
                    </div>
                </div>
                <div className="post-image flex justify-end w-2/4">
                    <img src={PostImage} alt="post" />
                </div>
            </div>
        </>
    )
}

export default Post;