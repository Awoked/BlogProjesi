import React from "react";

const AuthorLarge = ({ AuthorImage, AuthorName }) => {
    return (
        <>
            <div className="author flex items-center gap-3">
                <div className="author-img w-24 rounded-full overflow-hidden">
                    <img src={AuthorImage} alt="author" className="w-full" />
                </div>
                <div className="author-name p-3 text-2xl font-medium">
                    {AuthorName}
                </div>
            </div>

        </>
    )
}

export default AuthorLarge;