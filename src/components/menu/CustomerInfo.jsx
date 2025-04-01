// import React from 'react'
import { useSelector } from "react-redux";
import { getAvatar } from "../../utils/getAvatar";
import { formatDate } from "../../utils/monthYr";


const CustomerInfo = () => {

       const customerData = useSelector(state => state.customer) 

 return (
  <div>
   <div className="flex items-center justify-between px-4 py-3">
    <div className="flex items-start flex-col">
     <h1 className="text-white text-2xl tracking-wider font-bold text-md">
      {customerData.customerName || "Customer Name"}
     </h1>
     <p className="text-[#ababab] text-xs mt-1 font-medium">#{customerData.orderId || "TableId"}/Dine-in</p>
     <p className="text-[#ababab] text-xs mt-2 font-medium">
      {formatDate(new Date())}
     </p>
    </div>
    <button className="bg-[#f6b100] p-3 text-black text-xl font-bold rounded-lg">
     {getAvatar(customerData.customerName)}
    </button>
   </div>
  </div>
 );
};

export default CustomerInfo;
