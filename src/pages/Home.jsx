import Card from "../components/card";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar page="history" />
      <div className="flex">
        <div className="px-5 pt-20 md:pl-[35rem] w-full">
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
