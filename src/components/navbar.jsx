import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";

export default function Navbar({ page }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
            <div className="flex justify-between">
              <button className="py-2 px-3 rounded border border-black">
                Category 1
              </button>
              <h2 className="py-2 px-3 rounded border border-black">mun</h2>
            </div>
          </div>
          <button>Log Out</button>
        </div>
      )}
      <div className="hidden md:fixed md:w-1/4 md:h-screen md:grid md:items-center md:mt-7">
        <div className="h-5/6 bg-[#d9d9d9] py-14 px-5 rounded-md">
          <div className="flex justify-around items-center">
            <h2 className="text-lg font-bold mb-5">Categories</h2>
          </div>
          <div className="p-7 w-full">
            <div className="flex justify-between">
              <button className="py-2 w-3/4 rounded border border-black mr-5">
                Category 1
              </button>
              <h2 className="py-2 w-1/4 text-center rounded border border-black">
                mun
              </h2>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button className="py-3 px-5 rounded bg-[#878787] hover:bg-black hover:text-white">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
