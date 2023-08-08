import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../Assets/images/logo.png"
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="w-full sticky top-0 bg-yellow-500 border-b border-black">
            <div className="container mx-auto">
                <div className="header-inner flex justify-between py-5 items-center">
                    <div className="logo w-56">
                        <Link to={"/"}>
                            <img src={Logo} alt="Large" />
                        </Link>
                    </div>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}

export default Header;