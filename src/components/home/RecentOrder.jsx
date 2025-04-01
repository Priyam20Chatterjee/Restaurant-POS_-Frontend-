// import React from "react"; 
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrder = () => {
       return(
            <div className="px-8 mt-6">
              <div className="bg-zinc-900 w-full h-[460px] rounded-lg">
                     <div className="flex justify-between items-center px-6 py-4">
                            <h1 className="text-white text-lg tracking-wider font-semibold">Recent Orders</h1> 
                            <a href="" className="text-blue-600 text-sm font-semibold">View all Orders</a>
                     </div>

                     <div className="flex items-center gap-4 bg-[#6D6A6A] px-6 py-4 mx-8 rounded-[15px]">
                       <FaSearch className="text-[#f5f5f5]" />
                       <input
                         type="text"
                         placeholder="Search the Orders..."
                         className="bg-[#6D6A6A] text-[#f5f5f5] outline-none"
                       />
                     </div>
                     <div className="mt-4 px-6 gap-3 overflow-y-scroll h-[300px] no-scrollbar">
                        <OrderList/>
                        <OrderList/>
                        <OrderList/>
                        <OrderList/>
                        <OrderList/>
                        <OrderList/>
                        <OrderList/>
                     </div>
              </div>
            </div>
       );
}

export default RecentOrder  