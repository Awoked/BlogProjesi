import React from "react";

const AuthorSmall = ({ AuthorImage, AuthorName }) => {
    return (
        <>
            <div className="author flex items-center gap-3">
                <div className="author-img w-8 rounded-full overflow-hidden">
                    <img src={AuthorImage} alt="author" className="w-full" />
                </div>
                <div className="author-name font-medium">
                    {AuthorName}
                </div>
            </div>

        </>
    )
}

export default AuthorSmall;