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
  <article className="bg-violet-700 w-screen h-screen">
    <img  class=" flex items-center justify-center rounded-full bg-purple-950 border-4 border-red-500"
     src={pokemon?.sprites.other['official-artwork'].front_default}
      alt={pokemon?.name}
       />
       <h2 class="text-2xl text-amber-500 border-red-700 bg-purple-950 text-center rounded-lg">{pokemon?.name} </h2>
  </article>
  
  )
}

export default PokeInfo54