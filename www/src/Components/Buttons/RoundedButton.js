import React from "react";

import { Link } from "react-router-dom";

const RoundedButton = ({ ClassProp, Text, Type, To }) => {
    return (
        <>
            {
                Type === "button" ?
                    (
                        <button className={`rounded-full px-4 py-2 bg-black text-white ${ClassProp}`}>
                            {Text}
                        </button>
                    )
                    :
                    (
                        <Link to={To} className={`rounded-full px-4 py-2 bg-black text-white ${ClassProp}`}>
                            {Text}
                        </Link>
                    )
            }
        </>
    )
}

export default RoundedButton;