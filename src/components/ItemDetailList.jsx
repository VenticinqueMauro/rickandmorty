import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Loading } from './Loading'

export const ItemDetailList = () => {

    const [character, setCharacter] = useState([])
    const [loader, setLoader] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const callApi = async () => {
            await fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(response => response.json())
                .then(data => {
                    setCharacter(data)
                    setLoader(false)
                })
        }

        callApi()

    }, [id])

    return (
        <div className='flex flex-col h-screen text-center'>
            <Link to='/'><img className='mx-auto' src={'https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png'} alt='Rick&Morty' width={'300'} /></Link>
            {
                !loader 
                ?
            <div className="mx-auto my-auto shadow-xl card card-side bg-base-100">
                <figure><img src={character.image} alt={character.name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{character.name}</h2>
                    <ul className='text-start'>
                        <li className='py-1'><span className='text-secondary'>Status: </span>{character.status === 'unknown' && <div className="badge badge-warning">Unknown</div>}{character.status === 'Alive' && <div className="badge badge-success">Alive</div>}{character.status === 'Dead' && <div className="badge badge-error">Dead</div>}</li>
                        <li className='py-1'><span className='text-secondary'>Gender: </span>{character.gender === 'Male' && <i className="text-xl fa-solid fa-person text-primary"></i>} {character.gender === 'Female' && <i className="text-xl fa-solid fa-person-dress text-accent"></i>} {character.gender === 'unknown' && <i className="text-xl fa-solid fa-question text-warning"></i>}</li>
                        <li className='py-1'><span className='text-secondary'>Species: </span>{character.species}</li>
                        <li className='py-1'><span className='text-secondary'>Origin: </span>{character.origin.name}</li>
                    </ul>
                    <div className="divider"></div>
                    <Link to={'/'} className="btn btn-primary">More Characters</Link>
                </div>
            </div>
                :
                <Loading />
            }
        </div>
    )
}
