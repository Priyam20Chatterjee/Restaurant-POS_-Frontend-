import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       orderId: "",
       customerName: "",
       customerPhone: "",
       guest: 0,
       tableNo: "",
};
 
const customerSlice = createSlice({
       name: "customer",
       initialState,
       reducers: {
              setCustomer: (state, action) => {
                    const {name, phone, guests} = action.payload;
                    state.orderId = `${Date.now()}`
                    state.customerName = name;
                    state.customerPhone = phone;
                    state.guest = guests;
              },

              removeCustomer: (state) => {
                     state.customerName = "",
                     state.customerPhone = "",
                     state.guest = 0,
                     state.tableNo = ""
              },

              updateTableNo: (state, action) => {
                     state.tableNo = action.payload.tableNo;
              }
       },
});

export const { setCustomer, removeCustomer, updateTableNo } = customerSlice.actions;
export default customerSlice.reducer

