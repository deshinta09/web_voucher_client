import { useNavigate } from "react-router-dom";

export default function Navbar({ page }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center bg-[#7d7d7d] py-3 px-16 fixed w-screen">
        <div className="flex items-center">
          <img
            className="rounded-full w-12 mr-3"
            src="./voucher.jpg"
            alt="logo_voucher"
          />
          <h2 className="text-lg font-bold">Voucher</h2>
        </div>
        <div>
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
    </>
  );
}
