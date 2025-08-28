import React from 'react'

const ItemDetail = ({detalle}) => {
    return (
        <div className="d-flex justify-content-center flex-column align-tems">
            <h1>Detalle del producto: {detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} className='img-fluid '></img>
            <p className='fst-italic'>{detalle.description}</p>
            <p className='fw-semibold'>{detalle.price}</p>
            <p className='fst-semibold'>Stock disponible: {detalle.stock}</p>
        </div>
    )
}

export default ItemDetail