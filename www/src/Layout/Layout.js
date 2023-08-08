import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { PostsProvider } from "../Context/GlobalDatas";
import { UserProvider } from "../Context/UserData";

const Layout = () => {
    return (
        <>
            <PostsProvider>
                <UserProvider>
                    <Header />
                    <Outlet />
                </UserProvider>
            </PostsProvider>
        </>
    )
}

export default Layout;