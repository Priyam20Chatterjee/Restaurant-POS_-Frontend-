// import React from 'react'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
const OrderCard = () => {
       return (
              <div className="w-[400px] bg-zinc-900 p-4 rounded-lg mb-4 ">
                     <div className="flex items-center gap-5 mb-3 ">
                            <button className="bg-[#f6b100] p-3 text-black text-xl font-bold rounded-lg">AM</button>
                            <div className="flex items-center justify-between w-[100%]">
                                   <div className="flex flex-col items-start gap-1">
                                          <h1 className="text-white text-lg font-semibold tracking-wide">Priyam Chatterjee</h1>
                                          <p className="text-[#ababab] text-sm">#101 Dine-in </p>
                                   </div>

                                   <div className="flex flex-col items-end gap-1">
                                          <p className="text-[#02CA3A] font-bold bg-[#02CA3A] bg-opacity-20 rounded-lg px-1 pb-1 "><IoCheckmarkDoneOutline className="inline mr-2" /> Ready</p>
                                          <p className="text-[#ababab] text-sm"><FaCircle className="inline mr-2 text-[#02CA3A]" /> Ready to Serve</p>
                                   </div>
                            </div>
                     </div>
                     <div className="flex items-center justify-between mt-4 mb-2">
                            <p className="text-sm text-[#c3acce]">March 13, 2025 8:00 AM</p>
                            <p className="text-sm text-[#c3acce]">8 Items</p>
                     </div>
                     <hr className="w-full border-[#BC6CE1]"/>
                     <div className="flex justify-between items-center mt-3 text-xl font-semibold text-[#E2C2FF]">
                            <h1>Total : </h1>
                            <p>Rs.500 /-</p>
                     </div>
              </div>
       )
}
  
export default OrderCard