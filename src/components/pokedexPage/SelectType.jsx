import { useEffect, useRef } from "react"
import useFetch from "../../hooks/useFetch"


const SelectType = ({setTypeSelected}) => {
const [types, getTypes] = useFetch()

useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type'

    getTypes(url)
}, [])
const handleChange = (e) => {
    setTypeSelected(e.target.value)
}
console.log(types);

  return (
  <select  class="bg-blue-500 text-white p-2 rounded" onChange={handleChange}>

    <option value="allPokemons">ALL POKEMONS</option>
    {types?.results.map((typeInfo) => (
        <option key={typeInfo.url} value={typeInfo.url}>
            {typeInfo.name}
            </option>

    ))}
  </select>
    
)
}

export default SelectType