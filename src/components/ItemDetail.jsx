import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const ItemDetail = ({detalle}) => {
    const [purchase, setPurchase]= useState(false)
    const {addItem, itemQuantity}=useContext(CartContext)

    const onAdd = (cantidad) => {
        setPurchase(true)
        addItem(detalle, cantidad)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title:`Agregaste ${detalle.name} al carrito`,
            showCancelButton:false,
            showConfirmButton:false,
            timer: 4000
        })
    }
    const stockActualizado = detalle.stock - itemQuantity(detalle.id)

    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h1>Detalle del producto: {detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} className='img-fluid w-25'></img>
            <p className='fst-italic'>{detalle.description}</p>
            <p className='fw-semibold'>$ {detalle.price}.00</p>
            <p className='fst-semibold'>Stock disponible: {stockActualizado}</p>
            {purchase ? <Link to='/cart' style={{ backgroundColor: '#094045', color: 'white', padding:'1rem' }}>Ir al carrito</Link> :<ItemCount stock={stockActualizado} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail