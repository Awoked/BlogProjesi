import React from "react";
import { Link } from "react-router-dom";

const CategoryButton = ({CategoryName, CategoryUrl}) =>{
    return(
        <Link to={CategoryUrl} className="p-3 border">
            {CategoryName}
        </Link>
    )
}

export default CategoryButton;