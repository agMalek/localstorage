import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import './Productos.css'

const Agregar = () => {


    const [productos, setProductos] = useState(JSON.parse(localStorage.getItem("productos")))


    const eliminarItem = (id) => {
        setProductos(productos.filter(p => id !== p.id ))
    }

    useEffect(() => {
        if(productos !== null){
            localStorage.setItem("productos", JSON.stringify(productos))
        }
    }, [productos])


    const eliminarTodo = () => {
        localStorage.clear()
        setProductos(null)
    }

    return (
        <div className='container mt-4'>
            <h2>Productos</h2>

            <Link to="/"><button className="btn btn-success me-3">Agregar +</button></Link>
            {/* INHABILITO EL BOTON SI NO HAY PRODUCTOS PARA ELIMINAR*/}
            <button className="btn btn-danger" disabled={productos === null || productos.length === 0} onClick={() => eliminarTodo()}>Eliminar todo</button>

            
            {
                productos !== null && productos.length > 0 ?

                /* SI HAY PRODUCTOS */
                <>
                    <div className='row border-top border-bottom mt-4 p-2'>
                        <div className='col-2 fw-bolder'>#</div>
                        <div className='col-4 fw-bolder'>Nombre del producto</div>
                        <div className='col-2 fw-bolder'>Cantidad</div>
                        <div className='col-2 fw-bolder'>Precio</div>
                        <div className='col-2 fw-bolder'>Acción</div>
                    </div>
                
                    {/* MUESTRO CADA UNO DE LOS PRODUCTOS */}
                    {productos.map((p, index)=> (
                        <div className='row' key={index}>
                            <div className='col-2 fw-bolder'>{index+1}</div>
                            <div className='col-4 fw-bolder'>{p.nombre}</div>
                            <div className='col-2 fw-bolder'>{p.cantidad}</div>
                            <div className='col-2 fw-bolder'>{p.precio * p.cantidad}</div>
                            <div className='col-2 fw-bolder'> <button className='btn btn-outline-danger' onClick={() => eliminarItem(p.id)}>Eliminar</button></div>
                        </div>
                    ))}
                    
                </>
                /* SI NO HAY PRODUCTOS */
                : <div className='row border-top border-bottom mt-4 p-2'>
                    <div className='col-12 fw-bolder'>No hay Productos</div>
                </div>
            }
        </div>
    );
}
 
export default Agregar;