import { useState } from "react"
const ItemCount = ({stock, onAdd})=> {
    const [count, setCount]= useState(1);

    const sumar = () => {
        if(count< stock){
            setCount(count + 1)
        }
    }
    const restar = () => {
        if(count > 0){
            setCount(count -1)
        }
    }

    return(
        <>
        {
            stock > 0
            ? <div className='d-flex flex-column align-item-center'>
                <div>
                    <button style={{ backgroundColor: '#4B507C', color: 'white', padding:'1rem' }} onClick={restar}>-</button>
                    <span className='btn'>{count}</span>
                    <button style={{ backgroundColor: '#4B507C', color: 'white', padding:'1rem' }} onClick={sumar}>+</button>
                </div>
                <button style={{ backgroundColor: '#094045', color: 'white', padding:'1rem' }} disabled={stock === 0 || count === 0} onClick={()=> onAdd(count)}>Comprar</button>
            </div>
            : <p>Lo sentimos, producto no disponible por el momento</p>
        }
        </>
    )
}

export default ItemCount;