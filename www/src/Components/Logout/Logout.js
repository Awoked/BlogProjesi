import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserData'

const Logout = () => {

    const { setUserData, setLogged } = useContext(UserContext);

    const LogoutHandler = () =>{
        setUserData(null);
        setLogged(false);
        localStorage.setItem("UserName", null);
    }

    return (
        <button onClick={LogoutHandler} className="bg-red-600 text-white font-bold p-3 rounded-md">
            Çıkış Yap
        </button>
    )
}

export default Logout
