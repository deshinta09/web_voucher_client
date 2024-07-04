import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Card({ data }) {
  const navigate = useNavigate();

  async function claimVoucher(id) {
    try {
      await axios({
        method: "post",
        url: `http://localhost:3000/voucherClaim/${id}`,
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Success add voucher!",
      });
      navigate("/myVoucher");
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: error.response.data.message,
      });
    }
  }

  return (
    <>
      <div className="w-96 h-72 rounded p-2 shadow-md mb-10">
        <img
          className="w-screen h-3/5 rounded border-2 border-[#d9d9d9] bg-cover"
          src={data.image}
          alt="voucher-img"
        />
        <div className="flex justify-between items-center px-3 mt-3">
          <div>
            <h1 className="font-bold md:text-xl md:font-semibold">
              {data.name}
            </h1>
            <h6>{data.category}</h6>
          </div>
          <button
            className="py-1 px-2 rounded bg-[#878787] hover:bg-black hover:text-white"
            onClick={() => claimVoucher(data.id)}
          >
            claim
          </button>
        </div>
      </div>
    </>
  );
}
