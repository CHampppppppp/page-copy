import React from 'react'
import DessertsList from "./DessertsList"
import "./Desserts.css"

const Desserts = ({ data, handleNumber }) => {
  return (
    <div className='Desserts'>
      <h2>Desserts</h2>
      {/* item list here */}
      <DessertsList data={data} handleNumber={handleNumber} />
    </div>
  )
}

export default Desserts