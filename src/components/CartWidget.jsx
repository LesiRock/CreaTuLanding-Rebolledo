import React, {useContext} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext);

    return(
        <div style={{ position: 'relative', display: 'inline-block', padding: '2px'}}>
            <FaShoppingCart size={24}/>{cartQuantity() > 0 && (<span style={{ marginLeft: '8px' }}>{cartQuantity()}</span>)}
        </div>
    )
}

export default CartWidget