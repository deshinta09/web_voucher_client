import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/navbar";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

export default function VoucherClaim() {
  return (
    <>
      <Navbar page="Home" />
      <div className="pt-20 md:pl-[30rem] w-full">
        <h1 className="px-10 text-xl pb-5 font-bold md:text-2xl">My Voucher</h1>
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
      {/* <div className="flex">
      </div> */}
    </>
  );
}
