import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { fetchVoucher } from "../feature/voucherSlice";
import axios from "axios";
import { fetchCategory } from "../feature/categoriedSlice";

export let funcVoucher = "";

export default function Home() {
  const dispatch = useDispatch();
  const vouchers = useSelector((state) => state.voucher.list);

  useEffect(() => {
    dispatch(fetchVoucher());
    dispatch(fetchCategory());
  }, []);
  return (
    <>
      <Navbar page="history" />
      <div className="flex">
        <div className="px-5 pt-20 flex w-screen">
          <div className="md:w-1/4 md:h-screen"></div>
          <div className="md:w-3/4 md:ml-10">
            <h1 className="px-10 text-xl pb-5 font-bold md:text-2xl">
              Vouchers
            </h1>
            <div className="grid md:grid-cols-3 gap-3">
              {vouchers.map((el) => (
                <Card data={el} key={el.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
