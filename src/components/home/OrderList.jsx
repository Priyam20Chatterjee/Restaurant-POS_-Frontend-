// import React from 'react'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
const OrderList = () => {
  return (
    <div className="flex items-center gap-6 mb-6">
       <button className="bg-[#f6b100] p-3 text-black text-xl font-bold rounded-lg">AM</button>
       <div className="flex items-center justify-between w-[100%]">
              <div className="flex flex-col items-start gap-2">
                     <h1 className="text-white text-lg font-semibold tracking-wide">Priyam Chatterjee</h1>
                     <p className="text-[#ababab] text-sm">8 Items </p>
              </div>
              <div>
                     <h1 className="text-[#F6B100] text-lg font-semibold tracking-wide border border-[#F6B100] px-4 py-2 rounded-lg">Table No. 2</h1>
              </div>
              <div className="flex flex-col items-start gap-2">
                     <p className="text-[#02CA3A] font-bold px-4"><IoCheckmarkDoneOutline className="inline mr-2" /> Ready</p>
                     <p className="text-[#ababab] text-sm"><FaCircle className="inline mr-2 text-[#02CA3A]"/> Ready to Serve</p>
              </div>
       </div>
    </div>
  )
}

export default OrderList