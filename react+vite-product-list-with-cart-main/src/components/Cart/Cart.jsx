import React, { useMemo } from 'react'
import "./Cart.css"
import CartList from './CartList'

const Cart = ({ data, handleRemove }) => {
  // 使用useMemo来计算订单，避免不必要的重新计算
  const order = useMemo(() => {
    return data.filter((item) => item.orderNum > 0);
  }, [data]);

  const length = order.length;

  return (
    <div className='Cart'>
      {order.length > 0 ? 
      <>
        <h2>Your Cart ({length})</h2>
      <CartList data={order} handleRemove={handleRemove} />
      <div className="orderInfo">
        <p>Order Total </p>
        <div className='totalPrice'>${data.reduce((acc, cur) => acc + cur.orderNum * cur.price, 0)}</div>
      </div>
        <div className="hint">
          <img src="/images/icon-carbon-neutral.svg" alt="carbon-neutral" />
          This is a <div style={{color:'hsl(14, 65%, 9%)'}}>carbon-neutral</div> delivery
        </div>
        <button className='confirmBtn'>Confirm Order</button>
      </>
      :
      <>
      <h2>Your Cart</h2>
      <div className="emptyCart">
        <img src="/images/illustration-empty-cart.svg" alt="empty cart" />
        <p>Your cart is empty</p>
      </div>
      </>
      }

    </div>
  )
}

export default Cart