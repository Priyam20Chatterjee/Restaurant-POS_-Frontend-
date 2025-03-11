// import React from 'react'

import { useState, useEffect } from "react"

const Greetings = () => {

  const[dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date())
    }, 1000) 
    return () => clearInterval(interval)
  }, [])

  const formatDate = (date) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  const formatTime = (date) => { 
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
  };  

  return (
    <div className="flex justify-between items-center px-8 mt-5">
       <div>
              <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">Good Morning, <span className="font-bolder">Priyam</span></h1>
              <p className="text-[#ababab] semibold text-sm">We give our best to the customers 😀</p>
       </div>
       <div>
              <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">{formatDate(dateTime)}</h1>
              <p className="text-[#ababab] text-sm semibold tracking-wider">{formatTime(dateTime)}</p>
       </div>
    </div> 
  )
}

export default Greetings
