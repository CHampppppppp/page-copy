import React from 'react'
import './DessertsList.css'

const DessertsList = ({ data, handleNumber }) => {
  return (
    <div className='itemListContainer'>
      {
        data.map((item) => (
          <div className={item.active ? 'itemCardActive' : 'itemCard'} key={item.id}>
            <img src={item.image.desktop} alt={item.name} />
            {item.active ?
              <div className='buttonContainerActive'>
                <button onClick={() => handleNumber(item.id, -1)}>-</button>
                <p>{item.orderNum}</p>
                <button onClick={() => handleNumber(item.id, 1)}>+</button>
              </div>
              :
              <div className='buttonContainer' onClick={() => handleNumber(item.id, 1)}>
                <img src="/images/icon-add-to-cart.svg" alt="Add to cart"/>
                <span className='itemButtonAdd'>Add to Cart</span>
              </div>
            }
            <div className='itemInfo'>
              <p className='itemCategory'>{item.category}</p>
              <p className='itemName'>{item.name}</p>
              <p className='itemPrice'>${item.price}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DessertsList
