// import React from 'react'

import { useSelector } from "react-redux"
import { getTotalPrice } from "../../redux/slice/cartSlice"

const Bill = () => {

  const cartData = useSelector(state => state.cart)
  const total = useSelector(getTotalPrice);
  const taxRate = 5.25 ;
  const tax = (total*taxRate)/100 ;
  const totalPriceWithTax = total+tax ;

  return (
    <>
        <div className="px-5 mt-2 flex items-center justify-between">
          <p className="text-xs text-[#ababab] font-medium">Items{cartData.length}</p>
          <h1 className="text-white text-md font-bold">Rs.{total}</h1>
        </div>
        <div className="px-5 mt-2 flex items-center justify-between">
          <p className="text-xs text-[#ababab] font-medium">Tax(5.25%)</p>
          <h1 className="text-white text-md font-bold">Rs.{tax}</h1> 
        </div>
        <div className="px-5 mt-2 flex items-center justify-between">
          <p className="text-xs text-[#ababab] font-medium">Total Amount:</p>
          <h1 className="text-white text-md font-bold">Rs.{totalPriceWithTax}</h1> 
        </div>
        <div className="flex item-center gap-4 px-5 mt-4">
          <button className="bg-zinc-800 px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">Cash</button>
          <button className="bg-zinc-800 px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">Online</button>
        </div>
        <div className="flex item-center gap-4 px-5 mt-4">
          <button className="bg-blue-600 px-4 py-3 w-full rounded-lg text-white font-bold tracking-wider">Invoice</button>
          <button className="bg-yellow-500 px-4 py-3 w-full rounded-lg text-black font-bold tracking-wider ">Place Order</button>
        </div>
 
    </>
  )
}

export default Bill