import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../feature/categoriedSlice";
import { fetchVoucher } from "../feature/voucherSlice";
import { fetchVoucherClaim } from "../feature/voucherClaimSlice";
import axios from "axios";

export default function Navbar({ page }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.category.list);
  const [categories, setCategories] = useState(allCategories);
  const navigate = useNavigate();

  function handlerLogout() {
    localStorage.removeItem("access_token");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success Log Out!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/login");
  }

  async function myCategories() {
    try {
      let { data } = await axios({
        method: "get",
        url: "http://localhost:3000/myCategories",
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });
      setCategories(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    page === "Home"
      ? dispatch(fetchVoucherClaim(filter))
      : dispatch(fetchVoucher(filter));
  }, [filter]);

  useEffect(() => {
    dispatch(fetchCategory());
    page === "Home" ? myCategories() : "";
  }, []);

  return (
    <>
      <div className="flex justify-between items-center bg-[#7d7d7d] py-3 px-10 fixed w-screen">
        <FontAwesomeIcon
          className="md:hidden"
          icon={faBars}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="hidden md:flex md:items-center">
          <img
            className="rounded-full w-12 mr-3"
            src="./voucher.jpg"
            alt="logo_voucher"
          />
          <h2 className="text-2xl font-bold">Voucher</h2>
        </div>
        <div className="hidden md:block">
          <h1 className="text-2xl font-bold">Judul</h1>
        </div>
        <div>
          <button
            className="py-2 px-9 rounded border border-black hover:bg-black hover:text-white"
            onClick={() =>
              page === "Home" ? navigate("/") : navigate("myVoucher")
            }
          >
            {page}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="h-screen bg-[#d9d9d9] w-3/5 fixed py-2">
          <div className="flex justify-around items-center">
            <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} />
            <img
              className="rounded-full w-12 mr-3"
              src="./voucher.jpg"
              alt="logo_voucher"
            />
            <h2 className="text-lg font-bold">Categoies</h2>
          </div>
          <div className="py-3 px-4">
            {categories.map((el, i) => (
              <div key={i} className="flex justify-between mb-4">
                <button
                  className="py-2 px-3 rounded border border-black w-3/5 hover:bg-black hover:text-white"
                  onClick={() => setFilter(el.category)}
                >
                  {el.category}
                </button>
                <h2 className="py-2 px-3 rounded border border-black w-1/5">
                  {el.num ? el.num : 1}
                </h2>
              </div>
            ))}
          </div>
          <button
            className="m-auto block py-3 px-5 rounded bg-[#878787] hover:bg-black hover:text-white"
            onClick={handlerLogout}
          >
            Log Out
          </button>
        </div>
      )}
      <div className="hidden md:fixed md:w-1/4 md:h-screen md:grid md:items-center md:mt-7">
        <div className="h-5/6 bg-[#d9d9d9] py-14 px-5 rounded-md">
          <div className="flex justify-around items-center">
            <h2 className="text-lg font-bold mb-5">Categories</h2>
          </div>
          <div className="p-7 w-full">
            {categories.map((el, i) => (
              <div key={i} className="flex justify-between">
                <button
                  className="py-2 w-3/4 rounded border border-black mr-5 hover:bg-black hover:text-white"
                  onClick={() => setFilter(el.category)}
                >
                  {el.category}
                </button>
                <h2 className="py-2 w-1/4 text-center rounded border border-black">
                  {el.num ? el.num : 1}
                </h2>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button
              className="py-3 px-5 rounded bg-[#878787] hover:bg-black hover:text-white"
              onClick={handlerLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
