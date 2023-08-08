import React, { useRef, useState } from "react";


const RegisterLayout = () => {


    const userName = useRef()
    const password = useRef()
    const passwordAgain = useRef()

    const [validateMessage, setValidateMessage] = useState();

    const RegisterHandler = (e) => {
        e.preventDefault()
        let RegisterData;
        if (password.current.value === passwordAgain.current.value) {
            RegisterData = {
                UserName: userName.current.value,
                password: password.current.value
            }
            fetch("http://localhost:5000/register", {
                method: 'POST',
                body: JSON.stringify(RegisterData),
                headers: new Headers({ "Content-Type": "application/json" })
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log(data)
                    setValidateMessage(data)
                    if (data.messageSuccess) {
                        setValidateMessage(data.messageSuccess)
                    } else if (data.message) {
                        setValidateMessage(data.message)
                    }
                })
        } else {
            setValidateMessage(true);
        }

    }


    return (
        <div className="container mx-auto py-14">
            <div className="md:w-1/4 mx-auto">
                <form onSubmit={RegisterHandler}>
                    <div className="flex flex-col gap-3 bg-yellow-500 p-3">
                        <input type="text" required className="p-3 rounded-md outline-none" ref={userName} placeholder="Kullanıcı Adı" />
                        <input type="password" required className="p-3 rounded-md outline-none" ref={password} placeholder="Şifre" />
                        <input type="password" required className="p-3 rounded-md outline-none" ref={passwordAgain} placeholder="Şifre Tekrar" />
                        <span className={ (validateMessage == "Bu Kullanıcı Zaten Kayıtlı" ? " text-red-800 " : " text-green-800 " )+" text-lg font-bold text-center"}>
                            {
                                validateMessage && validateMessage
                            }
                        </span>
                        <input type="submit" value="Kayıt Ol" className="p-3 cursor-pointer bg-black text-white font-medium text-lg" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterLayout;