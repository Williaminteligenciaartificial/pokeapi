import { useRef } from "react"

import { useDispatch } from "react-redux"

import { setTrainer } from "../store/slice/traainer.slice"
import { useNavigate } from "react-router-dom"


const HomPage = () => {
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setTrainer(inputTrainer.current.value.trim()))
    navigate('/pokedex')
 }
 const inputTrainer = useRef()

  return (
    <div className="p-4 space-y-6 bg-violet-950 w-screen h-screen">
        <h1 className="bg-slate-400 rounded-lg text-center">POKEMON</h1>

    <h2 className="bg-slate-600 gap-10 border-separate rounded-lg text-center" >HOLA ENTRENADOR </h2>

    <p className="text-white bg-black border-r-8 text-left gap-32 rounded-lg">Click here</p>

    <form  onSubmit={handleSubmit}>
        <input className="bg-slate-700  rounded-md text-center text-white p-4 space-y-6"
        ref={inputTrainer}
        type="text" placeholder=" write your trainer name" />
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> busquenlos </button>

    </form>
    </div>
  )
}

export default HomPage