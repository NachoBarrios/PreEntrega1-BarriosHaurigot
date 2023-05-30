import { useState } from 'react'
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting="Hola Bienvenidos, PROXIMAMENTE!" />
      </div>
    </>
  )
}

export default App
