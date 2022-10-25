import React from 'react'

export const Item = ({ character }) => {
    return (
        <div className="mx-auto wrapper text-start">
            <div className="cards">
                <figure className="card">
                    <img src={character.image} />
                    <figcaption><p className='text-2xl font-bold text-success ' style={{ textShadow: '0px 0px 8px #000' }}>{character.name}</p></figcaption>
                </figure>
            </div>
        </div>
    )
}
