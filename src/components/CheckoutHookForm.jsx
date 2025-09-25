import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'


const CheckoutHookForm = () => {
    const [orderId, setOrderId] = useState(null)
    const {cart, total, clear}= useContext(CartContext)
    const {register, handleSubmit, formState:{errors}, getValues}= useForm()

console.log(errors, 'errores')

    const finalizarCompra = (data) => {
            let order = {
            comprador : {
                name: data.name,
                lastname: data.lastname,
                address: data.address,
                email: data.email
            },
            compras: cart,
            total: total(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "orders")
        addDoc(ventas, order)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        }

    if(!cart.length && !orderId){
        return <EmptyCart/>
    }

    return  (
        <>
        {
            orderId
            ? <div style={{display:'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', minHeight:'60vh', textAlign:'center'}}>
                <h2>¡Gracias por tu compra! </h2>
                <h3>Tu numero de identificación es: {orderId}</h3>
            </div>
            : <div>
                <h1 >Para finalizar su compra, complete el siguiente formulario con sus datos</h1>
                <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
                    <div className="shadow p-4 rounded bg-white" style={{ width: '100%', maxWidth: '500px' }}>
                        <h3 className="text-center mb-4">Datos del comprador</h3>
                        <form onSubmit={handleSubmit(finalizarCompra)} style={{ maxWidth: '500px' }}>
                            <div className="mb-3">
                                <input placeholder='Ingrese su(s) nombre(s)' name='name' className='form-control' type="text" {...register("name", {required:true, minLength:3})}/>
                                {errors?.name?.type === 'required' && <p style={{color:'red'}}>Por favor complete el campo</p>}
                                {errors?.name?.type === 'minLength' && <p style={{color:'red'}}>El nombre debe de tener al menos 3 caracteres</p>}
                                <div className="mb-3">
                                <input placeholder="Nombre" className="form-control" type="text"{...register("name", { required: true })}/>
                                {errors.name && (<p className="text-danger">El nombre es obligatorio</p>)}
                            </div>
                            </div>
                            <div className="mb-3">
                                <input placeholder='Ingrese su(s) apellido(s)' name='lastname' className='form-control' type="text" {...register("lastname", {required:true, minLength:3})}/>
                                {errors?.lastname?.type === 'required' && <p style={{color:'red'}}>Por favor complete el campo</p>}
                                {errors?.lastname?.type === 'minLength' && <p style={{color:'red'}}>El apellido debe de tener al menos 3 caracteres</p>}
                            </div>
                            <div className="mb-3">
                                <input placeholder='Ingrese su direccion' name='address' className='form-control' type="text" {...register("address", {required:true, minLength:20})}/>
                                {errors?.address?.type === 'required' && <p style={{color:'red'}}>Por favor complete el campo</p>}
                                {errors?.address?.type === 'minLength' && <p style={{color:'red'}}>La dirección debe de incluir calle, numero, colonia, CP y ciudad</p>}
                            </div>
                            <div className="mb-3">
                                <input placeholder='Ingrese su correo' name='email' className='form-control' type="email" {...register("email", {required:true})}/>
                                {errors?.email?.type === 'required' && <p style={{color:'red'}}>Por favor complete el campo</p>}
                            </div>
                            <div className="mb-4">
                                <input placeholder='Repita su correo' name='secondmail' className='form-control' type="email" {...register("secondemail", {required:true, validate:{equalsMails: (value) => value === getValues("email"),},})}/>
                                {errors?.secondemail?.type === 'required' && <p style={{color:'red'}}>Por favor complete el campo</p>}
                                {errors?.secondemail?.type === 'equalsMails' && <p style={{color:'red'}}>Por favor complete el campo</p>}
                            </div>
                            <button style={{backgroundColor:'#094045', color: 'white', padding:'1rem'}} type='submit'>Completar compra</button>
                        </form>
                    </div>
                </div>
            </div>
        }
        </>
        
        )
} 

export default CheckoutHookForm;