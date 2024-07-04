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
          <h2 className="text-lg font-bold">Voucher</h2>
        </div>
        <div className="hidden md:block">
          <h1 className="text-lg font-bold">Judul</h1>
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
        </div>
      )}
    </>
  );
}
