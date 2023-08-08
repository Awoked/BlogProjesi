import React, { useContext, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserData";
import RoundedButton from "../Buttons/RoundedButton";
import Logout from "../Logout/Logout";

const Navbar = () => {

    const [user, setUser] = useState();

    const { logged, userData } = useContext(UserContext);

    useEffect(() => {
        console.log(localStorage.getItem("UserName"));
        const Logged = localStorage.getItem("UserName");
        if (Logged !== null) {
            setUser(Logged);
        }
    }, [userData])

    return (
        <nav className="flex gap-5 items-center">
            <Link to={"/"}>Ana Sayfa</Link>
            <Link to={"/"}>Hakkımızda</Link>
            <RoundedButton
                Text={<span className="flex items-center gap-3">Blog Oluştur <AiOutlinePlus size={24} className="text-green-400" /></span>}
                To={"/createblog"}
            />
            {
                logged ?
                    <div className="flex gap-3">
                        <div className="bg-black text-white font-bold p-3 rounded-md">
                            {
                                <span>
                                    {user && user}
                                </span>
                            }
                        </div>
                        <Logout />
                    </div>
                    :
                    <>
                        <RoundedButton
                            Text={"Giriş Yap"}
                            To={"/login"}
                        />
                        <RoundedButton
                            Text={"Kayıt Ol"}
                            To={"/register"}
                        />
                    </>
            }

        </nav>
    )
}

export default Navbar;