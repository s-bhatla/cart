import React from 'react'
import CartCard from './CartCard.jsx'

const Cart = () => {
  return (
    <div>
        <div className='pt-4'><CartCard /></div>
        <div className='pt-4'><CartCard /></div>
        <div className='pt-4'><CartCard /></div>
        <div className='pt-4'><CartCard /></div>

        <div className='mycentre h3'>
          Total : 276
        </div>
        <div className='mycentre'><button className='btn btn-primary'>BUY</button></div>
    </div>
  )
}

export default Cart