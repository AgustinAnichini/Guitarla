// import {Fragment} from "react"
import { useMemo } from "react";
import Guitar from "./Guitar";

export default function Header({carrito,eliminarDelCarrito}){
    // aqui se puede escribir codigo de JS (STATE)
    // const name = "Agustin"
    // const total = 100

    // cada componente de React debe retornar 1 solo elemento --> DIV O </> (Fragment)
    // 1 SOLO ELEMENTO EN EL NIVEL MAXIMO

    //State derivado
    const isEmpity = useMemo(() => carrito.length === 0, [carrito]) // renderiza solo cuando carrito cambie, sino renderiza toda la app
    const cantidadTotal = useMemo( () => carrito.reduce((total,item) => total + (item.cantidad * item.price),0),[carrito])

    return (
<header className="py-5 header">
  <div className="container-xl">
    <div className="row justify-content-center justify-content-md-between">
      <div className="col-8 col-md-3">
        <a href="index.html">
          <img
            className="img-fluid"
            src="./public/img/logo.svg"
            alt="imagen logo"
          />
        </a>
      </div>
      <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
        <div className="carrito">
          <img
            className="img-fluid"
            src="./public/img/carrito.png"
            alt="imagen carrito"
          />

          <div id="carrito" className="bg-white p-3">
            { isEmpity ? (
              <p className="text-center">El carrito esta vacio</p>
            ):(
              <>
                <table className="w-100 table">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito.map(guitar =>(
                        <tr key={guitar.id}>
                          <td>
                            <img
                              className="img-fluid"
                              src={`/img/${guitar.image}.jpg`}
                              alt="imagen guitarra"
                            />
                          </td>
                          <td>{guitar.name}</td>
                          <td className="fw-bold">${guitar.price}</td>
                          <td className="flex align-items-start gap-4">
                            <button type="button" className="btn btn-dark">-</button>
                            {guitar.cantidad}
                            <button type="button" className="btn btn-dark">+</button>
                          </td>
                          <td>

                            <button 
                            onClick={()=> eliminarDelCarrito(guitar.id)}
                            className="btn btn-danger" 
                            type="button">
                              X
                            </button>

                          </td>
                        </tr>
                    ))}
                  </tbody>
                </table>
                
                <p className="text-end">
                  Total pagar: <span className="fw-bold">${cantidadTotal}</span>
                </p>  
            </>
            )}
            <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>
    )
    
}