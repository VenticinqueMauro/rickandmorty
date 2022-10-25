import React, { useEffect, useState } from 'react'
import { Item } from './Item'
import { Loading } from './Loading'
import { Pagination } from './Pagination'
import { InputSearch } from './InputSearch'

export const ItemList = () => {

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [text, setText ] = useState('')


    useEffect(() => {

        const callApi = async () => {
            await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
                .then(response => response.json())
                .then(data => setCharacters(data.results))
            setLoading(false)
        }

        callApi()
    }, [page])

    const filterCharacter = characters.filter(character => character.name.toLowerCase().includes(text.toLowerCase()))



    return (
        <div>
            {/* <h1 className='top-0 z-10 mt-5 text-5xl text-center text-primary'>Rick & Morty</h1> */}
            <img className='mx-auto' src={'https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png'} alt='Rick&Morty' width={'300'} />
            <div className='z-10 flex items-center justify-around mt-5'>
            <Pagination page={page} setPage={setPage} />
            <InputSearch setText={setText} />
            </div>
            {
                loading
                    ?
                    <Loading  />
                    :
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                        {
                            filterCharacter.map(character => {
                                return (
                                    <Item key={character.id} character={character} />
                                )
                            })
                        }
                    </div>
                    
            }
        </div>
    )
}
