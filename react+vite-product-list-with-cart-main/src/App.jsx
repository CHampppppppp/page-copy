import React, { useState, useEffect } from 'react'
import './App.css'
import Desserts from './components/Desserts/Desserts'
import Cart from './components/Cart/Cart'
import rawData from './assets/data.json'

function App() {
  const [data, setData] = useState([])

  // 初始化数据
  useEffect(() => {
    const localData = localStorage.getItem('data')
    if (localData) {
      setData(JSON.parse(localData))
    } else {
      const updateData = rawData.map((item) => ({
        ...item,
        active: false,
        orderNum: 0
      }))
      setData(updateData)
      localStorage.setItem('data', JSON.stringify(updateData))
    }
  }, [])

  // 同步数据到localStorage
  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem('data', JSON.stringify(data))
    }
  }, [data])

  const handleNumber = (id, num) => {
    setData(data.map((item) => {
      if (item.id === id) {
        const newOrderNum = item.orderNum + num
        return {
          ...item,
          active: newOrderNum > 0,
          orderNum: Math.max(0, newOrderNum)
        }
      }
      return item
    }))
  }

  const handleRemove = (id) => {
    setData(prevData => 
      prevData.map(item => 
        item.id === id ? { ...item, orderNum: 0 } : item
      )
    );
  };

  return (
    <div className='container'>
      <Desserts data={data} handleNumber={handleNumber} />
      <Cart data={data} handleRemove={handleRemove} />
    </div>
  )
}

export default App
