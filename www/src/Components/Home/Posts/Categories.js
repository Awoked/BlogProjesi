import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../../Context/GlobalDatas";
import CategoryButton from "../../Buttons/CategoryButton";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    const CategoryData = useContext(CategoryContext);

    useEffect(() => {
        setCategories(CategoryData.Categories);
    }, [])

    return (
        <>
            <div className="flex flex-wrap gap-2">
                {
                    categories.map((category, index) => (
                        <CategoryButton
                            key={index}
                            CategoryName={category.CategoryName}
                            CategoryUrl={category.CategoryUrl}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Categories;