import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
    return (
        <div className='grid h-screen text-3xl text-center place-content-center'>
            <img src="https://media1.giphy.com/media/hS42TuYYnANLFR9IRQ/giphy.gif?cid=6c09b952v9vr2h6acufeyqoofvoilxc4m670x6hcoix01r33&rid=giphy.gif&ct=ts" alt="" />            
            <Link to='/' className='btn btn-primary'>Volver</Link>
        </div>
    )
}
