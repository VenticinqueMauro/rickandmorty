import React from 'react'

export const Loading = () => {
    return (
        <div className='mx-auto mt-20'>
        <div className="dot-wave mx-auto mt-5">
            <div className="dot-wave__dot"></div>
            <div className="dot-wave__dot"></div>
            <div className="dot-wave__dot"></div>
            <div className="dot-wave__dot"></div>
        </div>
        <p className='text-center text-2xl mt-5'>Loading...</p>
        </div>
    )
}
