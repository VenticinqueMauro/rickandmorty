import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Loading } from './Loading'
import { Howl } from 'howler'
import sonidoBack from '../sound/back.flac'



export const ItemDetailList = () => {

    const [character, setCharacter] = useState([])
    const [loader, setLoader] = useState(true)
    const { id } = useParams()

    const sound = new Howl({
        src: sonidoBack,
    })



    useEffect(() => {

        const callApi = async () => {
            await fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(response => response.json())
                .then(data => {
                    setTimeout(() => {
                        setCharacter(data)
                        setLoader(false)
                    }, 1000);
                })
        }

        callApi()

    }, [id])

    return (
        <div className='flex flex-col h-screen text-center'>
            <Link to='/'><img className='mx-auto' src={'https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png'} alt='Rick&Morty' width={'400'} /></Link>
            {
                !loader
                    ?
                    <div className="mx-auto my-auto bg-transparent card cardContainerDetail card-side animate__animated animate__zoomIn">
                        <div className="card-body">
                            <div className='flex items-center justify-between gap-4 '>
                                <h2 className="text-xl lg:text-3xl card-title textShadow animate__animated animate__fadeInDown animate__delay-1s">{character.name}</h2>
                                <img className='w-16 rounded-full lg:w-24 cardetail animate__animated animate__fadeInRight animate__delay-1s' src={character.image} alt={character.name} />
                            </div>
                            <ul className='text-start animate__animated animate__zoomIn animate__delay-1s'>
                                <li className='py-1 '><span className='text-blue-400 textShadow'>Status: </span>{character.status === 'unknown' && <div className="badge badge-warning">Unknown</div>}{character.status === 'Alive' && <div className="badge badge-success">Alive</div>}{character.status === 'Dead' && <div className="badge badge-error">Dead</div>}</li>
                                <li className='py-1 '><span className='text-blue-400 textShadow'>Gender: </span>{character.gender === 'Male' && <i className="text-xl fa-solid fa-person text-primary"></i>} {character.gender === 'Female' && <i className="text-xl fa-solid fa-person-dress text-accent"></i>} {character.gender === 'unknown' && <i className="text-xl fa-solid fa-question text-warning"></i>}</li>
                                <li className='py-1 '><span className='text-blue-400 textShadow'>Species: </span>{character.species}</li>
                                <li className='py-1 '><span className='text-blue-400 textShadow'>Origin: </span>{character.origin.name}</li>
                            </ul>
                            <div className="divider"></div>
                                <Link to={'/'} className="btn" onClick={() => sound.play()}>More Characters</Link>
                        </div>
                    </div>
                    :
                    <Loading />
            }
        </div>
    )
}
