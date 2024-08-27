

import {Route,Routes} from 'react-router-dom'
import './App.css'
import HomPage from './Pages/HomPage'
import Pokedex1 from './Pages/pokedex1'
import PokeInfo54 from './Pages/PokeInfo54'
import ProtectedRoutes from './Pages/ProtectedRoutes'

function App() {


  return (
    <div className='bg-blue-900'>
       <h1 className='rounded-lg text-3xl font-bold underline text-white bg-blue-500 text-center'>
      Welcome to the Pokemon App
    </h1>
      <Routes>
        <Route path='/' element={<HomPage/>}/>
        <Route element={<ProtectedRoutes/>}>
          
        <Route path='/pokedex' element={<Pokedex1/>}/>
        <Route path='/pokemon/:name' element={<PokeInfo54/>}/>
        </Route>
      </Routes>
      
      </div>
  )
}

export default App
