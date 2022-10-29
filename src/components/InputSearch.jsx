import React from 'react'
import { Howl } from 'howler'
import sonidoTecla from '../sound/sonidoTecla.mp3'

export const InputSearch = ({setText}) => {

    const sound = new Howl({
        src: sonidoTecla
    })

    const inputValue = (e) => {
        sound.play()
        setText(e.target.value)
    }
    
    return (
        <div className="form-control">
            <div className="bg-transparent input ">
                <input type="text" placeholder="Search Name…" className="bg-transparent input input-bordered placeholder:text-success" onChange={(e) => inputValue(e)} />
            </div>
        </div>
    )
}
