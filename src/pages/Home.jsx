import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { fetchVoucher } from "../feature/voucherSlice";
import axios from "axios";

export let funcVoucher = "";

export default function Home() {
  const dispatch = useDispatch();
  const vouchers = useSelector((state) => state.voucher.list);

  useEffect(() => {
    dispatch(fetchVoucher());
  }, []);
  return (
    <>
      <Navbar page="history" />
      <div className="flex">
        <div className="px-5 pt-20 md:pl-[35rem] w-full">
          <h1 className="px-10 text-xl pb-5 font-bold md:text-2xl">Vouchers</h1>
          <div className="grid justify-center md:grid-cols-3 gap-3 px-7">
            {vouchers.map((el) => (
              <Card data={el} key={el.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
