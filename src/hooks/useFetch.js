import { useState } from "react";
import axios from 'axios'

const useFetch = () => {
    const [response, setResponse] = useState()
    const getData = (url) => {
        axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => console.log(err)
        )

    }
    const getTypeData = (url) => {
        axios.get(url)
        .then(res => {
            const obj = {
                results: res.data.pokemon.map(item => item.pokemon)
            }
            setResponse(obj)
            
            
        })
        .catch((err) => console.log(err))
    }
    return [response, getData, getTypeData]

} 
export default useFetch