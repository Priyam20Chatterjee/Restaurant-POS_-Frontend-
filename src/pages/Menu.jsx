// import React from 'react'
// import { useState } from "react";
import { BackButton } from "../components/shared/BackButton";
import BottomNav from "../components/shared/BottomNav";
import {  RiRestaurant2Line } from "react-icons/ri";
import MenuContainer from "../components/menu/MenuContainer";
import  CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import Bill from "../components/menu/Bill";
import { useSelector } from "react-redux";

const Menu = () => {

  const customerData = useSelector(state => state.customer) 

  return (
    <section className="bg-zinc-800 h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* left div */}
      <div className="flex-[3]">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-white text-2xl tracking-wider font-bold">Menu</h1>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <RiRestaurant2Line className="text-[#f5f5f5] text-4xl" />
            <div className="flex flex-col items-start">
              <h1 className="text-md text-[#f5f5f5]">{customerData.customerName}</h1>
              <p className="text-xs text-[#ababab]">{customerData.tableNo} </p>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>

      {/* right div */}
      <div className="flex-[1] bg-zinc-900 mt-4 mr-3 h-[780px] rounded-lg pt-2">
         <CustomerInfo/>
        <hr className="border-[#2a2a2a] border-t-2"/>
        <CartInfo/>
        <hr className="border-[#2a2a2a] border-t-2"/>
        <Bill/>
      </div>

      <BottomNav />
    </section>
  );
};

export default Menu;
