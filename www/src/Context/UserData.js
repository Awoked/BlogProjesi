import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    const [logged, setLogged] = useState(false);

    const [userBlogData, setUserBlogData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("UserName") !== null) {
            setUserData(localStorage.getItem("UserName"))
            if (userData !== "null" && userData !== null) {
                setLogged(true);
            }
        }

        fetch(`http://localhost:5000/getblogsbyuser?username=${userData}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUserBlogData(data);
            })

    }, [userData]);

    return (
        <UserContext.Provider value={{ userData, setUserData, logged, setLogged, userBlogData }}>
            {children}
        </UserContext.Provider>
    )
}