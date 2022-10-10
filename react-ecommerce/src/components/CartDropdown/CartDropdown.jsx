import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'

import './CartDropdown.scss'

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'

const CartDropdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('/checkout')
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={goToCheckout}>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown