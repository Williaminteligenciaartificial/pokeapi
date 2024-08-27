import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'


const PokeCard = ({poke}) => {
    const [pokemon, getPokemon] = useFetch()
    const navigate = useNavigate()
    useEffect(() => {
        getPokemon(poke.url )
    }, [])
    const  handleNavigate = () => {
        navigate(`/pokemon/${pokemon.name}`)
    }
    console.log(pokemon);
    
  return (
    <article className="bg-blue-950" onClick={handleNavigate}>
    <header>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt= {pokemon?.name}  />
    

    </header>
    <section>
        <h3 className='text-white bg-green-400'>{pokemon?.name}</h3>
        <ul className='text-white bg-black p-4 space-y-6 gap-24'>
            {pokemon?.types.map((typeInfo) => (
                <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
            
            ))}
        </ul>
        <hr/>
        <ul className='text-white bg-black rounded-lg p-4 space-y-6' >
            {pokemon?.stats.map((statInfo)=> (
                <li key={statInfo.stat.url}>

                    <span  className=' bg-blue-700 rounded-full h-20 w-20 '>{statInfo.stat.name}</span>
                    <span className='rounded-lg bg-blue-300 text-black h-20 w-20' >{statInfo.base_stat}</span>
                    </li>

            ))}
        </ul>
    </section>
  </article>
  )
  
}

export default PokeCard