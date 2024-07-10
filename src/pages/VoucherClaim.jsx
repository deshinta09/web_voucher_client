import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar";
import { fetchVoucherClaim } from "../feature/voucherClaimSlice";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import Swal from "sweetalert2";
import axios from "axios";

export default function VoucherClaim() {
  const dispatch = useDispatch();
  const allClaim = useSelector((state) => state.voucherClaim.list);

  async function deleteVoucher(id) {
    try {
      // console.log(id, "<< id");
      await axios({
        method: "delete",
        url: `http://localhost:3000/voucherClaim/${id}`,
        headers: { Authorization: `Bearer ${localhost.access_token}` },
      });
      dispatch(fetchVoucherClaim());
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Success delete voucher claim!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
      console.log(error, "<-err search");
    }
  }

  useEffect(() => {
    dispatch(fetchVoucherClaim());
  }, []);
  return (
    <>
      <Navbar page="Home" />
      <div className="pt-20 px-7 flex md:w-screen">
        <div className="md:w-1/4 md:h-screen"></div>
        <div className="md:w-3/4 md:ml-10">
          <h1 className="px-10 text-xl pb-5 font-bold md:text-2xl">
            My Voucher
          </h1>
          <div className="md:py-5 md:px-7">
            <table className="w-screen rounded border">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="border p-2">
                {allClaim.map((el) => (
                  <tr key={el.id}>
                    <td className="flex gap-3 items-center">
                      <img
                        className="rounded-full w-10 mr-3"
                        src={el.Voucher?.image}
                        alt="image_voucher"
                      />
                      <h1>{el.Voucher?.name}</h1>
                    </td>
                    <td>
                      <FontAwesomeIcon
                        className="cursor-pointer"
                        onClick={() => deleteVoucher(el.id)}
                        icon={faTrash}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div className="flex">
      </div> */}
    </>
  );
}
