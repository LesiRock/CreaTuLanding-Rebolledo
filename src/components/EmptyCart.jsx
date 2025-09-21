import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div style={{display:'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', minHeight:'60vh', textAlign:'center'}}>
            <h2>Tu carrito esta vacio</h2>
            <h3>Checa la mercancía que tenemos para ti</h3>
            <br/>
            <Link style={{backgroundColor: '#094045', color: 'white', padding:'1rem', textDecoration:'none' }}>Volver a Home</Link>
        </div>
    )
}

export default EmptyCart