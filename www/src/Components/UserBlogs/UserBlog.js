import React from 'react'
import DeletePost from '../Buttons/DeletePost'

const UserBlog = ({PostTitle, PostImage, AuthorName, ContentText, ID}) => {
    return (
        <div key={ID} className="w-full border border-gray-600 p-3 rounded-md flex gap-3 relative">
            <div className="h-20">
                <img src={PostImage} className="h-full" alt={PostTitle} />
            </div>
            <div>
                <h3 className="font-semibold">
                    {AuthorName}
                </h3>
                <p>
                    {ContentText}
                </p>
            </div>
            <DeletePost ID={ID} />
        </div>
    )
}

export default UserBlog
