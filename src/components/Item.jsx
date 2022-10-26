import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ character }) => {
    return (
        <div className="w-56 mx-auto mt-10 shadow-xl card bg-base-300">
            <figure><img src={character.image} alt="Shoes" /></figure>
            <div className="mx-auto card-body">
                <h2 className="card-title">
                    {character.name}
                </h2>
                <div className='flex items-center gap-2 justify-evenly'>
                    <div>
                    {character.gender === 'Male' && <i className="text-xl fa-solid fa-person text-primary"></i>}
                    {character.gender === 'Female' && <i className="text-xl fa-solid fa-person-dress text-accent"></i>}                
                    {character.gender === 'unknown' && <i className="text-xl fa-solid fa-question text-warning"></i>}
                    </div>
                    <div>
                    {character.status === 'unknown' && <div className="badge badge-warning">Unknown</div>}
                    {character.status === 'Alive' && <div className="badge badge-success">Alive</div>}
                    {character.status === 'Dead' && <div className="badge badge-error">Dead</div>}          
                    </div>
                </div>
                <div className="divider"></div> 
                    <Link to={`/character/${character.id}`} className="rounded-full btn btn-info btn-sm">Details</Link>
            </div>
        </div>
    )
}
