import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import LoginLayout from '../../Components/LoginRegister/LoginLayout'
import { UserContext} from '../../Context/UserData'

const Login = () => {
    const { logged } = useContext(UserContext);

    useEffect(() => {
        console.log("logged sayfa" + logged)
    }, []);

    return (
        <section className='h-screen'>
            {
                logged ?
                    <Navigate to={"/"} />
                    :
                    <LoginLayout />
            }
        </section>
    )
}

export default Login
