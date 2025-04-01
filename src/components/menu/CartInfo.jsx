// import React from 'react'
import { FaNotesMedical } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const  CartInfo = () => {

       const cartData = useSelector(state => state.cart)

 return (
  <div>
   <div className="px-4 py-2">
    <h1 className="text-white text-lg tracking-wider font-semibold">
     Order Details:
    </h1>
    <div className="mt-4 overflow-y-scroll h-[380px] no-scrollbar">
       {cartData.map((item)=>{
              return(
                     <>
                     <div className="rounded-lg bg-[#1f1f1f] px-4 py-4 mb-2">
                     <div className="flex items-center justify-between">
                      <h1 className="text-white text-md tracking-wider font-semibold">
                       {item.name}
                      </h1>
                      <p className="font-semibold text-[#f5f5f5]">{item.quantity}</p>
                     </div>
                     <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3">
                       <RiDeleteBin3Fill className="text-[#f5f5f5] cursor-pointer" size={20} />
                       <FaNotesMedical className="text-[#f5f5f5] cursor-pointer" size={20} />
                      </div>
                      <p className="font-bold text-md text-[#f5f5f5]">{item.price}</p>
                     </div>
                    </div>
                    </>
               
              ) 
       })}
    </div>
   </div>
  </div>
 );
};

export default CartInfo;
