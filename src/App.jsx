import Guitar from "./Components/Guitar"
import Header from "./Components/Header"
import {useState, useEffect} from "react"
import { db } from "./Data/db"

function App() {
  const [data, setData] = useState(db)
  const [carrito, setCarrito] = useState([])

  function agregarAlCarrito(item){

    const existeEnCarrito = carrito.findIndex(guitar => guitar.id === item.id)
    // n° >= 0 EXISTE EN CARRITO
    if (existeEnCarrito >= 0) {
      const carritoActualizado = [...carrito] // tomo una copia de mi state --> INMUTABLE
      carritoActualizado[existeEnCarrito].cantidad++
      setCarrito(carritoActualizado)
    } else {
      item.cantidad = 1
      setCarrito([...carrito, item])
    }
  }

  function eliminarDelCarrito(id){
    setCarrito( prevCart => prevCart.filter(guitar => guitar.id !== id) )
  }

  return (
    <>

  <Header
  carrito={carrito}
  eliminarDelCarrito={eliminarDelCarrito}
  />

<main className="container-xl mt-5">
  <h2 className="text-center">Nuestra Colección</h2>

  <div className="row mt-5">
    {data.map((guitar)=>(
      <Guitar 
        key = {guitar.id}
        guitar={guitar}
        agregarAlCarrito={agregarAlCarrito}
      />

    ))}
    
  </div>
</main>

<footer className="bg-dark mt-5 py-5">
  <div className="container-xl">
    <p className="text-white text-center fs-4 mt-4 m-md-0">
      GuitarLA - Todos los derechos Reservados
    </p>
  </div>
</footer>

    </>
  )
}

export default App
