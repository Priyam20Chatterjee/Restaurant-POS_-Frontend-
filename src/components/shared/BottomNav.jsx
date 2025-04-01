// import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaHome } from "react-icons/fa";
import { IoMdReorder } from "react-icons/io";
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router";
import Modal from "./Modal";
import { setCustomer } from "../../redux/slice/customerSlice";

const BottomNav = () => {
 const navigate = useNavigate();
 const location = useLocation();
 const dispatch = useDispatch();
 const [isModalOpen, setisModalOpen] = useState(false);
 const [guestCount, setGuestCount] = useState(0);
 const [name, setName] = useState();
 const [phone, setPhone] = useState(); 

 const openModal = () => setisModalOpen(true);
 const closeModal = () => setisModalOpen(false);

 const increment = () => {
  if (guestCount >= 6) return;
  setGuestCount((prev) => prev + 1);
 };

 const decrement = () => {
  if (guestCount <= 0) return;
  setGuestCount((prev) => prev - 1);
 };

 const isActive = (path) => location.pathname === path;

 const handleCreateOrder = () => {
  dispatch(setCustomer({name, phone, guests: guestCount}))
  navigate('/tables')
 }

 return (
  <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 p-2 h-16 flex justify-around">
   <button
    onClick={() => navigate("/")}
    className="text-white text-2xl bg-zinc-800 w-[200px] rounded-[20px] flex items-center justify-center"
   >
    <FaHome className="inline mr-2" size={25} /> <p>Home</p>
   </button>
   <button
    onClick={() => navigate("/orders")}
    className="text-white text-2xl bg-zinc-800 w-[200px] rounded-[20px] flex items-center justify-center"
   >
    <IoMdReorder className="inline mr-2" size={25} /> <p>Orders</p>
   </button>
   <button
    onClick={() => navigate("/tables")}
    className="text-white text-2xl bg-zinc-800 w-[200px] rounded-[20px] flex items-center justify-center"
   >
    <MdTableBar className="inline mr-2" size={25} /> <p>Tables</p>
   </button>
   <button className="text-white text-2xl bg-zinc-800 w-[200px] rounded-[20px] flex items-center justify-center">
    <CiCircleMore className="inline mr-2" size={25} /> <p>More</p>
   </button>

   <button
    className="bg-[#f6B100] absolute bottom-5 text-white text-2xl rounded-full p-4 items-center"
    disabled={isActive("/tables") || isActive("/menu")}
    onClick={openModal}
   >
    <BiSolidDish size={45} />
   </button>

   <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
    <div>
     <label className="block text-gray-300 text-sm font-medium mb-2">
      Customer Name
     </label>
     <div className="flex items-center border border-gray-300 rounded-lg px-4 p-3">
      <input
       value={name}
       onChange={(e)=>setName(e.target.value )}
       type="text"
       placeholder="Enter Customer Name"
       className="bg-transparent text-white focus:outline-none flex-1"
      />
     </div>
    </div>

    <div>
     <label className="block text-gray-300 text-sm font-medium mb-2">
      Customer Phone-No.
     </label>
     <div className="flex items-center border border-gray-300 rounded-lg px-4 p-3">
      <input
       value={phone} 
       onChange={(e)=>setPhone(e.target.value)}
       type="text"
       placeholder="+91-XXXXXXXXXX"
       className="bg-transparent text-white focus:outline-none flex-1"
      />
     </div>
    </div>

    <div>
     <label className="block mb-2 mt-3 text-sm font-medium text-[#ababab]">
      Guest
     </label>
     <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
      <button onClick={decrement} className="text-yellow-500 text-2xl">
       &minus;
      </button>
      <span className="text-white"> {guestCount} Person</span>
      <button onClick={increment} className="text-yellow-500 text-2xl">
       &#43;
      </button>
     </div>
    </div>
    <button
     onClick={() => handleCreateOrder()}
     className="w-full bg-[#F6B100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700"
    >
     Create Order
    </button>
   </Modal>
  </div>
 );
};

export default BottomNav;
