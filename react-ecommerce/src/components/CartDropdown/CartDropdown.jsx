import './CartDropdown.scss'

import Button from '../Button/Button'

const CartDropdown = () => {

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown