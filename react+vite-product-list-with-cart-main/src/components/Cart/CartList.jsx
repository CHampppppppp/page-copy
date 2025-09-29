import React from 'react'
import './CartList.css'

const CartList = ({ data, handleRemove }) => {

  return (
    <div className='CartList'>
      {
        data.map((item) => (
          <div className='cartItem' key={item.id}>
            <div className='cartItemInfo'>
              <h3>{item.name}</h3>
            <div className='itemOrderInfo'>
              <p className='itemOrderNum'>{item.orderNum}x</p>
              <p className='itemPrice'>@${item.price}</p>
              <p className='culculatePrice'>${item.orderNum * item.price}</p>
            </div>
            </div>
            <div className='removeBtn' onClick={() => handleRemove(item.id)}>
              <img src="/images/icon-remove-item.svg" alt="remove item" />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CartList