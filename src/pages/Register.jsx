export default function Register() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-[#d9d9d9] p-7 md:p-10 shadow-md rounded h-4/6 md:h-3/5">
          <h1 className="text-center mb-10 md:mb-8 md:text-2xl text-xl font-semibold">
            Register
          </h1>
          <form action="" className="grid gap-4">
            <div className="grid md:text-lg md:flex md:justify-between">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="rounded p-2 border border-black md:ml-3"
              />
            </div>
            <div className="grid md:text-lg md:flex md:justify-between">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="rounded p-2 border border-black md:ml-3"
              />
            </div>
            <div className="grid md:text-lg md:flex md:justify-between mb-10 md:mb-8">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="rounded p-2 border border-black md:ml-3"
              />
            </div>
            <button className="py-2 px-5 rounded border border-black hover:bg-black hover:text-white md:text-lg">
              Sigh In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
