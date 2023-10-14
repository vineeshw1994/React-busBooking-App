import { BrowserRouter , Routes, Route } from 'react-router-dom'
import {useState} from 'react'
import './App.css'
import Header from './components/Header'
import BusSearch from './components/BusSearch'


function App() {
  const [searchState,setSearchState] = useState({
    from: '',
    to:'',
    date:''
  })

  return (
    <div>
    <Header></Header>
    <BrowserRouter>
    <Routes>
      <Route path='/'
       element={
       <BusSearch 
       searchState={searchState} 
       setSearchState={setSearchState} />}>
      

      </Route>
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
