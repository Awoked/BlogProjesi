import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
    return (
        <>
            <div className="flex  animate-pulse items-center justify-center p-5 gap-5 text-6xl">
                <AiOutlineLoading3Quarters className="animate-spin" />
            </div>
        </>
    )
}

export default Loading
