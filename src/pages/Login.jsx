import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-[#d9d9d9] p-7 md:p-10 shadow-md rounded h-3/5 md:h-2/4">
          <h1 className="text-center mb-14 md:mb-8 md:text-2xl text-xl font-semibold">
            Page Login
          </h1>
          <form action="" className="grid gap-4">
            <div className="grid md:text-lg md:flex md:justify-between">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="rounded p-2 border border-black md:ml-3"
              />
            </div>
            <div className="grid md:text-lg md:flex md:justify-between mb-14 md:mb-8">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="rounded p-2 border border-black md:ml-3"
              />
            </div>
            <button className="py-2 px-5 rounded border border-black hover:bg-black hover:text-white md:text-lg">
              Login
            </button>
            <button
              className="py-2 px-5 rounded border hover:border-black hover:bg-[#d9d9d9] md:text-lg"
              onClick={() => navigate("/register")}
            >
              Sigh In
            </button>
            {/* <div className="flex justify-around">
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}
