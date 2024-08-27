import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/pokedexPage/PokeCard"
import SelectType from "../components/pokedexPage/SelectType"





const Pokedex1 = () => {
    const trainer = useSelector((states) => states.trainer)
    const [pokemons, getPokemons, getTypePokemons] = useFetch()
    const [searchedName, setSsearchedName] = useState('')
    const [typeSelected, setTypeSelected] = useState('allPokemons')

    useEffect(() => {
        if (typeSelected === 'allPokemons'){
        const url ='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
        
        getPokemons(url)
        }else{
            getTypePokemons(typeSelected);
        }
    }, [typeSelected])

    const handleSearch = (e) => {
        e.preventDefault()
        setSsearchedName(inputName.current.value.trim().toLoerCase())
    }
    const inputName = useRef()

    const callbackFilter = (poke) => {
        const filterName = poke.name.includes(searchedName)
        return filterName

    }
    console.log(pokemons);
    
  return (
    <div className="bg-black" >
        <h1 className=" bg-blue-950 rounded-lg text-center  w-1/2 mx-auto text-white">Pokedex</h1>
    
    <p className="bg-blue-900 rounded-lg text-center  w-1/2 mx-auto text-white">Welcome to pokemon MR     {trainer}</p>
    <form onSubmit={handleSearch}>
        <input type="text" ref={inputName} />
    </form>
    <SelectType setTypeSelected ={setTypeSelected}/>
    <section className="bg-vilolet-950">
        {pokemons && !pokemons.results.some(callbackFilter)?
        (<h2>there is no pokemon thet match the filter</h2>):
        pokemons?.results.filter(callbackFilter).map((poke) => (

                <PokeCard key={poke.url} poke = {poke} />
            ))
        }
    </section>
    </div>
  )
}

export default Pokedex1