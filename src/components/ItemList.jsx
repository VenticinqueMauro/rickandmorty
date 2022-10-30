import React, { useEffect, useState } from 'react'
import { Item } from './Item'
import { Loading } from './Loading'
import { Pagination } from './Pagination'
import { InputSearch } from './InputSearch'
import { Link } from 'react-router-dom'





export const ItemList = () => {

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [text, setText] = useState('')



    useEffect(() => {

        const callApi = async () => {
            await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
                .then(response => response.json())
                .then(data => setCharacters(data.results))
            setTimeout(() => {
                setLoading(false)
            }, 800);
        }
        
        callApi()
    }, [page])

    const filterCharacter = characters.filter(character => character.name.toLowerCase().includes(text.toLowerCase()))




    return (
        <div className='containerList'>
            {/* <h1 className='top-0 z-10 mt-5 text-5xl text-center text-primary'>Rick & Morty</h1> */}
            <Link to={'/'}><img className='mx-auto' src={'https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png'} alt='Rick&Morty' width={'400'} /></Link>
            <div className='flex justify-center'>
                <InputSearch setText={setText} />
            </div>
            {
                loading
                    ?
                    <Loading />
                    :
                    <>
                        <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                            {
                                filterCharacter.length > 0
                                    ?
                                    filterCharacter.map(character => {
                                        return (
                                            <li key={character.id}>
                                                <Item character={character} />
                                            </li>
                                        )
                                    })
                                    :
                                    <p className='h-screen col-span-2 col-start-2 pt-10 text-xl text-center text-error'>
                                        Character not found...
                                    </p>
                            }
                        </ul>
                        <div className='flex justify-center pb-10 mt-10'>
                            <Pagination page={page} setPage={setPage} />
                        </div>
                    </>
            }
        </div>
    )
}