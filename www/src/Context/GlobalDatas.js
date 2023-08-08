import { createContext } from "react";



export const PostsContext = createContext();

export const PostsProvider = (props) => {


    const BlogDatas = {
        NewPostsData: [],
        TrendPostsData: [
            {
                AuthorName: "Lorem ipsum",
                AuthorImage: "https://picsum.photos/200",
                Content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sequi velit assumenda laudantium repudiandae accusantium!",
                PostDate: "3 Ocak",
            },
            {
                AuthorName: "Lorem ipsum",
                AuthorImage: "https://picsum.photos/200",
                Content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sequi velit assumenda laudantium repudiandae accusantium!",
                PostDate: "3 Ocak",
            },
            {
                AuthorName: "Lorem ipsum",
                AuthorImage: "https://picsum.photos/200",
                Content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sequi velit assumenda laudantium repudiandae accusantium!",
                PostDate: "3 Ocak",
            },
            {
                AuthorName: "Lorem ipsum",
                AuthorImage: "https://picsum.photos/200",
                Content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sequi velit assumenda laudantium repudiandae accusantium!",
                PostDate: "3 Ocak",
            },
            {
                AuthorName: "Lorem ipsum",
                AuthorImage: "https://picsum.photos/200",
                Content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sequi velit assumenda laudantium repudiandae accusantium!",
                PostDate: "3 Ocak",
            },
            {
                AuthorName: "Lorem ipsum",
                AuthorImage: "https://picsum.photos/200",
                Content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sequi velit assumenda laudantium repudiandae accusantium!",
                PostDate: "3 Ocak",
            },
        ]
    }

    const getNewData = async () => {
        const res = await fetch("http://localhost:5000/newposts");
        const data = await res.json();
        BlogDatas.NewPostsData = JSON.parse(data);
    }
    getNewData();

    return (
        <PostsContext.Provider value={BlogDatas}>
            {props.children}
        </PostsContext.Provider>
    )
}



export const CategoryContext = createContext();

export const CategoryProvider = props => {

    const CategoryData = {
        Categories: [
            { CategoryName: "History", CategoryUrl: "/" },
            { CategoryName: "Programming", CategoryUrl: "/" },
            { CategoryName: "Data Science", CategoryUrl: "/" },
            { CategoryName: "Technology", CategoryUrl: "/" },
            { CategoryName: "Self Improvement", CategoryUrl: "/" },
            { CategoryName: "Writing", CategoryUrl: "/" },
            { CategoryName: "Machine Learning", CategoryUrl: "/" },
            { CategoryName: "Productivity", CategoryUrl: "/" },
        ]
    }

    return (
        <CategoryContext.Provider value={CategoryData}>
            {props.children}
        </CategoryContext.Provider>
    )
}