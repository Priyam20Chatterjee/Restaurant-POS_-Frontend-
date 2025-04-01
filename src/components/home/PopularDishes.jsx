// import React from "react";
import { popularDishes } from "../../constants";
const PopularDishes = () => {
       return(
              <div className="mt-6 pr-6">
                     <div className="bg-zinc-900 w-full rounded-lg">
                            <div className="flex justify-between items-center px-6 py-4">
                                   <h1 className="text-white text-lg tracking-wider font-semibold">Popular Dishes</h1> 
                                   <a href="" className="text-blue-600 text-sm font-semibold">View all Dishes</a>
                            </div>
                     </div>

                     <div className="overflow-y-scroll h-[680px] no-scrollbar">
                            {
                                   popularDishes.map((dish)=>{
                                          return(
                                                 <div key={dish.id} className="flex items-center gap-4 bg-gray-700 px-6 py-4 mt-4 rounded-[15px]">
                                                        <h1 className="text-[#f5f5f5] text-[25px] font-semibold">{dish.id < 10 ? `0${dish.id}` : dish.id}</h1>
                                                        <img src={dish.image} alt={dish.name} className="w-[50px] h-[50px] rounded-full"/>
                                                        <div className="text-white">
                                                               <h1>{dish.name}</h1>
                                                               <p><span>Orders: </span>{dish.numberofOrder}</p>
                                                        </div>
                                                 </div>
                                          )
                                   })
                            }
                     </div>
              </div>
       );
};

export default PopularDishes