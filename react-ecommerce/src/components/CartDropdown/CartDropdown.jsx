import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

import './CartDropdown.scss'

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)


    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown