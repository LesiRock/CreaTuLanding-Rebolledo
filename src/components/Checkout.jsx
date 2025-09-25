import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import EmptyCart from './EmptyCart';

const CheckoutHookForm = () => {
    const [orderId, setOrderId] = useState(null);
    const { cart, total, clear } = useContext(CartContext);

    const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
    } = useForm();

    const finalizarCompra = (data) => {
    const order = {
        comprador: {
        name: data.name,
        lastname: data.lastname,
        address: data.address,
        email: data.email,
    },
    compras: cart,
    total: total(),
    date: serverTimestamp(),
    };

    const ventas = collection(db, 'orders');
    addDoc(ventas, order)
    .then((res) => {
        setOrderId(res.id);
        clear();
        reset(); // Limpia el formulario
    })
    .catch((error) => console.error(error));
};

    if (!cart.length && !orderId) {
    return <EmptyCart />;
    }

    return (
    <>
        {orderId ? (
        <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            }}
        >
            <h2>¡Gracias por tu compra!</h2>
            <h3>Tu número de orden es: {orderId}</h3>
        </div>
        ) : (
        <div>
            <h1 className="text-center my-4">
            Para finalizar su compra, complete el siguiente formulario
            </h1>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="shadow p-4 rounded bg-white" style={{ width: '100%', maxWidth: '500px' }}>
                <h3 className="text-center mb-4">Datos del comprador</h3>
            <form onSubmit={handleSubmit(finalizarCompra)} noValidate>
                <div className="mb-3">
                <input placeholder="Nombre" className="form-control" {...register('name', {required: 'Este campo es obligatorio',minLength: {value: 3, message: 'Debe tener al menos 3 caracteres',},})}/>
                {errors.name && (<small className="text-danger">{errors.name.message}</small>)}
                </div>
                <div className="mb-3">
                <input placeholder="Apellido" className="form-control" {...register('lastname', {required: 'Este campo es obligatorio', minLength: {value: 3, message: 'Debe tener al menos 3 caracteres',},})}/>
                {errors.lastname && (<small className="text-danger">{errors.lastname.message}</small>)}
                </div>
                <div className="mb-3">
                <input placeholder="Dirección completa" className="form-control"{...register('address', {required: 'Este campo es obligatorio',minLength: {value: 10, message: 'Debe incluir calle, número, colonia, etc.',},})}/>
                {errors.address && (<small className="text-danger">{errors.address.message}</small>)}
                </div>
                <div className="mb-3">
                <input placeholder="Correo electrónico" className="form-control" type="email"{...register('email', {required: 'Este campo es obligatorio',pattern: {value: /^\S+@\S+\.\S+$/, message: 'Correo no válido',},})} />
                {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
                </div>
                <div className="mb-4">
                <input placeholder="Confirmar correo" className="form-control" type="email"{...register('emailConfirm', {required: 'Este campo es obligatorio',validate: (value) =>value === getValues('email') || 'Los correos no coinciden',})}/>
                {errors.emailConfirm && (<small className="text-danger">{errors.emailConfirm.message}</small>)}
                </div>
                <button className="btn w-100" style={{backgroundColor: '#094045', color: 'white', padding: '1rem',}} type="submit">Completar compra</button>
            </form>
            </div>
        </div>
        </div>
    )}
    </>
    );
};

export default CheckoutHookForm;
