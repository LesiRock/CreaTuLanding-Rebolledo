import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'


const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState('')
    const {cart, total, clear}= useContext(CartContext)

    const buyerData = (e) =>{
        setBuyer (
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }
    const finalizarCompra = (e) => {
        console.log(e)
        e.preventDefault()

        let order = {
            comprador : buyer,
            compras: cart,
            total: total(),
            date: serverTimestamp()
        }

    }
    return  (

            <div>
                <h1>Para finalizar su compra, complete el siguiente formulario con sus datos</h1>
                <form onSubmit={finalizarCompra}>
                    <input placeholder='Ingrese su(s) nombre(s)' name='name' className='forma-control' type="text" onChange={buyerData}/>
                    <input placeholder='Ingrese su(s) apellido(s)' name='lastname' className='forma-control' type="text" onChange={buyerData}/>
                    <input placeholder='Ingrese su direccion' name='address' className='forma-control' type="text" onChange={buyerData}/>
                    <input placeholder='Ingrese su correo' name='email' className='forma-control' type="email" onChange={buyerData}/>
                    <input placeholder='Repita su correo' name='email' className='forma-control' type="emailConfirm" onChange={(e)=> setValidMail(e.target.value)}/>
                    <button style={{backgroundColor:'#094045', color: 'white', padding:'1rem'}} type='submit'>Completar compra</button>
                </form>
            </div>
        
        )
} 

export default Checkout;