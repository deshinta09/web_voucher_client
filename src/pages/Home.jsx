import Card from "../components/card";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar page="history" />
      {/* <h1 className="text-center">Page Home</h1> */}
      <div className="flex px-3 pt-24">
        <div
          style={{ height: "80vh" }}
          className="w-1/5 bg-[#d9d9d9] p-3 grid gap-4 content-center rounded-md fixed"
        >
          <div>
            <h1 className="py-3 px-6 border border-black rounded block m-auto text-center">
              Category
            </h1>
          </div>
          <div className="flex mr-5">
            <h1 className="py-2 px-6 border border-black rounded block m-auto mt-10">
              Category 1
            </h1>
            <h1 className="py-2 px-6 border border-black rounded block m-auto mt-10">
              num
            </h1>
          </div>
        </div>
        <div className="pl-72 pr-5 w-screen px-14">
          <h1 className="text-md pb-3 block font-bold">Vouchers</h1>
          <div className="grid grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
