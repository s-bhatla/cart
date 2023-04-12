import React from 'react'
import CartCard from './CartCard.jsx'

const Cart = () => {
  return (
    <div>
        <div className='pt-4'><CartCard /></div>
        <div className='pt-4'><CartCard /></div>
        <div className='pt-4'><CartCard /></div>
        <div className='pt-4'><CartCard /></div>

        <div>
          Total : 276
        </div>
    </div>
  )
}

export default Cart