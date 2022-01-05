import { useEffect, useState } from 'react';
import './Agregar.css'
import {v4 as uuidv4} from 'uuid'

const Agregar = () => {
        
    let productos;


    /* PARA PODER HACER EL .PUSH LA PRIMERA VEZ QUE AGREGO, EN CASO DE QUE EL SOTRAGE DEVUELVA NULL, INSTANCIO A PRODUCTOS COMO ARRAY VACIO */
    useEffect(()=> {
        let storage = JSON.parse(localStorage.getItem("productos"))
        if( storage === null) {
            productos = []
        }
        else{
            productos = storage
        }
    })

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState(1)
    const [precio, setPrecio] = useState(1)
    

    /* -----------   AGREGO PRODUCTO -------------- */
    const guardarDatos = (e) => {
        e.preventDefault()
        let pro = {
            id: uuidv4(),
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        }
        productos.push(pro)
        localStorage.setItem("productos", JSON.stringify(productos))
        limpiarDatos()
    }
    
    /* --------LIMPIA VALORES PARA LIPMIAR LOS INPUT  */
    const limpiarDatos = () =>{
        setNombre("")
        setCantidad(1)
        setPrecio(1)
    }

    return (
        <div className='container mt-4'>
            
            <h2>Agregar producto</h2>

            <form onSubmit={(e) => guardarDatos(e)}>
                {/*  -------------- CAMPO NOMBRE  -----------*/}
                <div className="mb-3">
                    <label className="form-label">Nombre del producto</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                {/*  -------------- CAMPO CANTIDAD  -----------*/}
                <div className="mb-3">
                    <label className="form-label">Cantidad</label>
                    <input type="number" min={1} className="form-control" value={cantidad} onChange={(e) => setCantidad(e.target.value)}/>
                </div>

                {/*  -------------- CAMPO PRECIO  -----------*/}
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input type="number" min={1} className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success">Guardar</button>
            </form>
        </div>
    );
}
 
export default Agregar;