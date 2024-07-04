import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import instance from "../config/instance";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    list: [],
  },
  reducers: {
    setCategory: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export const fetchCategory = () => {
  return async (dispatch) => {
    try {
      let { data } = await instance({
        method: "get",
        url: "/categories",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      dispatch(setCategory(data));
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: error.response.data.message,
      });
      console.log(error, "<< error di feature category");
    }
  };
};

export default categorySlice.reducer;