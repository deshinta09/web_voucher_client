import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import instance from "../config/instance";

export const voucherSlice = createSlice({
  name: "voucher",
  initialState: {
    list: [],
  },
  reducers: {
    setVoucher: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setVoucher } = voucherSlice.actions;

export const fetchVoucher = (filter) => {
  return async (dispatch) => {
    try {
      let { data } = await instance({
        method: "get",
        url: `/voucher?filter=${filter}`,
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });
      dispatch(setVoucher(data));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
      console.log(error, "<< error di feature");
    }
  };
};

export default voucherSlice.reducer;
