// import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { GrRadialSelected } from "react-icons/gr";
import { menus } from "../../constants";
import { getBGColor } from "../../utils";
import { IoCartOutline } from "react-icons/io5";
import { addItems } from "../../redux/slice/cartSlice";
 
const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemsCount, setItemsCount] = useState(0);
  const [ItemId, setItemId] = useState(0);
  const dispatch = useDispatch();

  const increment = (id) => {
    setItemId(id);
    setItemsCount(itemsCount + 1);
  };
  const decrement = (id) => {
    setItemId(id);
    setItemsCount(itemsCount - 1);
  };

  const handleAddToCart = (item) => {
    if(itemsCount == 0) return;
    const{name,price} = item
    const newObj = {
      id:new Date(),
      name,
      pricePerQuantity: price,
      quantity: itemsCount,
      price: price*itemsCount
    } 
    dispatch(addItems(newObj));
    setItemsCount(0);
  };

  // const [bgColor, setBgColor] = useState("bg-blue-500");

  // useEffect(() => {
  //     setBgColor(getBGColor());
  // }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              onClick={() => {
                setSelected(menu);
                setItemId(0);
                setItemsCount(0);
              }}
              key={menu.id}
              className={`flex flex-col justify-between rounded-lg p-4 h-[100px] cursor-pointer hover:bg-zinc-600 ${getBGColor()}`}
            >
              <div className="flex items-menu.idcenter justify-between w-full ">
                <h1 className="text-white text-lg font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-white" size={20} />
                )}
              </div>
              <p className="text-sm text-purple-900 font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border-t-2 mt-4 border-zinc-600" />

      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {selected.items.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex flex-col rounded-lg p-4 h-[150px] cursor-pointer hover:bg-zinc-600 bg-zinc-700`}
            >
              <div className="flex items-center justify-between w-full ">
                <h1 className="text-white text-lg font-semibold">
                  {item.name}
                 </h1>
                <button onClick={()=>handleAddToCart(item)} className="bg-green-500 p-2 text-white rounded-lg"><IoCartOutline size={25}/> </button> 

              </div>
              <p className="text-xl text-purple-400 font-bold">
                {item.price} Rs
              </p>
              <div className="flex  items-center justify-between relative left-[80%] top-[5px] bg-[#1f1f1f] w-[60px] py-2 rounded-lg">
                <button
                  onClick={() => decrement(item.id)}
                  className="text-yellow-500 text-2xl"
                >
                  &minus;
                </button>
                <span className="text-white">
                  {" "}
                  {item.id == ItemId ? itemsCount : "0"}
                </span>
                <button
                  onClick={() => increment(item.id)}
                  className="text-yellow-500 text-2xl"
                >
                  &#43;
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
