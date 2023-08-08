import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import RegisterLayout from "../../Components/LoginRegister/RegisterLayout";
import { UserProvider } from "../../Context/UserData";

const Register = () => {
    const logged  = useContext(UserProvider);

    return (
        <section className="h-screen">
            {
                logged ? <Navigate to={"/"} /> : <RegisterLayout />
            }
        </section>
    )
}

export default Register;