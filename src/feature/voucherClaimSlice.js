import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import instance from "../config/instance";

export const voucherClaimSlice = createSlice({
  name: "voucherClaim",
  initialState: {
    list: [],
  },
  reducers: {
    setVoucherClaim: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setVoucherClaim } = voucherClaimSlice.actions;

export const fetchVoucherClaim = () => {
  return async (dispatch) => {
    try {
      let { data } = await instance({
        method: "get",
        url: "/voucherClaim",
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });
      dispatch(setVoucherClaim(data));
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: error.response.data.message,
      });
      console.log(error, "<< error voucher claim di feature");
    }
  };
};

export default voucherClaimSlice.reducer;
