import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const {cartItems, total, amount} = useSelector((store) => store.cart)
  if(amount< 1) {
    return (  
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <div className="empty-cart">is currently empty</div>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>total <span>${total.toFixed(2)}</span></h4>
        </div>
        <button onClick={() => dispatch(openModal())} className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  )
}

export default CartContainer