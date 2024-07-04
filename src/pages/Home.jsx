import Card from "../components/card";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar page="history" />
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
        <div className="px-5 pt-20 md:pl-96 w-full">
          <h1 className="px-10 text-xl pb-5 font-bold md:text-2xl">Vouchers</h1>
          <div className="grid justify-center md:grid-cols-3 gap-3 px-7">
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
