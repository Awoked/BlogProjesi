import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../../../Context/GlobalDatas";
import AuthorSmall from "../../Author/AuthorSmall";

const PostCard = ({ AuthorImage, AuthorName, Content, PostDate, Index }) => {


    const [showPost, setShowPost] = useState(false);

    useEffect(() => {
        let Time = (Number(`${Index}000`) / 6);
        setTimeout(() => {
            setShowPost(true);
        }, Time);
    }, [])

    return (
        <>
            <div className={(showPost? " !opacity-100 " : " ") + " opacity-0 transition-all duration-500 post-card flex gap-2"} >
                <div className="post-number text-4xl text-gray-400">
                    <span>
                        0{Index += 1}
                    </span>
                </div>
                <div className="post flex flex-col gap-3">
                    <AuthorSmall
                        AuthorImage={AuthorImage}
                        AuthorName={AuthorName}
                    />
                    <p className="content font-bold leading-tight">
                        <Link to={"/"}>
                            {
                                Content
                            }
                        </Link>
                    </p>
                    <div className="post-info text-sm text-gray-500 font-medium">
                        <span className="date">{PostDate}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCard;