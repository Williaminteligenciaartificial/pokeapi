import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const PokeInfo54 = () => {
    const {name} = useParams()
   const [pokemon, getPokemon] =  useFetch()
   useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    getPokemon(url)
   }, [name])

    
    
  return (
  <article className="bg-violet-950 w-screen h-screen">
    <img 
     src={pokemon?.sprites.other['official-artwork'].front_default}
      alt={pokemon?.name}
       />
       <h2 className="text-white  bg-blue-900 text-center rounded-full w-auto">{pokemon?.name} </h2>
  </article>
  
  )
}

export default PokeInfo54