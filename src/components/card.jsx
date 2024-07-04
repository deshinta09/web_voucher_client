export default function Card() {
  return (
    <>
      <div className="w-96 h-72 rounded p-2 shadow-md mb-10">
        <img
          className="w-screen h-3/5 rounded border-2 border-[#d9d9d9] bg-cover"
          src="./voucher.jpg"
          alt="voucher-img"
        />
        <div className="flex justify-between items-center px-3 mt-3">
          <div>
            <h1 className="font-bold md:text-xl md:font-semibold">
              voucher name
            </h1>
            <h6>10-11-2014</h6>
          </div>
          <button className="py-1 px-2 rounded bg-[#878787] hover:bg-black hover:text-white">
            claim
          </button>
        </div>
      </div>
    </>
  );
}
