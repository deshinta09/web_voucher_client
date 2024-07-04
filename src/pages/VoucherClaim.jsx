import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/navbar";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

export default function VoucherClaim() {
  return (
    <>
      <Navbar page="Home" />
      <div className="flex">
        <div className="hidden md:fixed md:w-1/4 md:h-screen md:grid md:items-center md:mt-7">
          <div className="h-5/6 bg-[#d9d9d9] py-14 px-5 rounded-md">
            <div className="flex justify-around items-center">
              <h2 className="text-lg font-bold mb-5">Categories</h2>
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
        </div>
        <div className="pt-20 md:pl-96 w-full">
          <h1 className="px-10 text-xl pb-5 font-bold md:text-2xl">
            My Voucher
          </h1>
          <div className="py-5 px-7">
            <table className="w-full rounded border">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="border p-2">
                <tr>
                  <td className="flex gap-3 items-center">
                    <img
                      className="rounded-full w-10 mr-3"
                      src="./voucher.jpg"
                      alt="image_voucher"
                    />
                    <h1>Voucher 1</h1>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
