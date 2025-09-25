import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import  Checkout  from './Checkout';
import Swal from 'sweetalert2';

const CartView = () =>{
    const {cart, removeItem, clear, total} = useContext(CartContext)
    const preConfirm = () =>{
        Swal.fire({
            title:"¿Estas seguro de querer borrar todo el carrito",
            showDenyButton:true,
            denyButtonText:'No',
            confirmButtonText:'Si',
            confirmButtonColor: '#4B507C',
            denyButtonColor:'#094045'
        }).then((result)=>{
            if(result.isConfirmed){
                clear()
                Swal.fire('¡Carrito borrado!', '', 'success');
            }else if(result.isDenied){
                Swal.fire('El carrito no se borró', '', 'info');
            }
        })
    }
    return (
        <div>
            <h1>Tu carrito</h1>
            <div>
                {
                    cart.map((compra)=> (
                        <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                            <span>{compra.name}</span>
                            <span>${compra.price}.00</span>
                            <span>Cantidad: {compra.quantity}</span>
                            <span>Precio Final: $ {compra.quantity * compra.price}.00</span>
                            <img src={compra.img} alt={compra.name} style={{width:'9rem'}}/>
                            <button style={{backgroundColor: '#4B507C', color: 'white', padding:'1rem'}}onClick={()=> removeItem(compra.id)}>X</button>
                        </div>
                    ))
                }
            </div>
            <h4 style={{ textAlign: 'center' }}>Total: ${total()}.00 </h4>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
                <button style={{backgroundColor: '#094045', color: 'white', padding:'1rem'}}onClick={preConfirm}>Vaciar Carrito</button>
                <Link style={{backgroundColor: '#094045', color: 'white', padding:'1rem'}} to='/Checkout'>Terminar Compra</Link>
            </div>
        </div>
    )
}

export default CartView