import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../../Context/UserData';

const LoginLayout = () => {


    const userName = useRef()
    const password = useRef()

    const [validateMessage, setValidateMessage] = useState({});

    const { userData, setUserData } = useContext(UserContext);

    const LoginHandler = (e) => {
        e.preventDefault()
        const LoginData = {
            UserName: userName.current.value,
            password: password.current.value
        }
        fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify(LoginData)
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                localStorage.setItem("UserName", data.UserName)
                setUserData(data.UserName)
            })
    }



    return (
        <div className="container mx-auto py-14">
            <div className="md:w-1/4 mx-auto">
                <form onSubmit={LoginHandler}>
                    <div className="flex flex-col gap-3 bg-yellow-500 p-3">
                        <input type="text" required className="p-3 rounded-md outline-none" ref={userName} placeholder="Kullanıcı Adı" />
                        <input type="password" required className="p-3 rounded-md outline-none" ref={password} placeholder="Şifre" />
                        <span className="text-red-800 font-bold underline text-center">
                            {
                                validateMessage && validateMessage.message
                            }
                        </span>
                        <input type="submit" value="Giriş Yap" className="p-3 cursor-pointer bg-black text-white font-medium text-lg" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginLayout
