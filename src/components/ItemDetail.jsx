import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const ItemDetail = ({detalle}) => {
    const [purchase, setPurchase]= useState(false)
    const {addItem}=useContext(CartContext)

    const onAdd = (cantidad) => {
        setPurchase(true)
        addItem(detalle, cantidad)
    }
    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h1>Detalle del producto: {detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} className='img-fluid w-25'></img>
            <p className='fst-italic'>{detalle.description}</p>
            <p className='fw-semibold'>$ {detalle.price}.00</p>
            <p className='fst-semibold'>Stock disponible: {detalle.stock}</p>
            {purchase ? <Link to='/cart' style={{ backgroundColor: '#094045', color: 'white', padding:'1rem' }}>Ir al carrito</Link> :<ItemCount stock={detalle.stock} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail