import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  async function hadleLogin(e) {
    e.preventDefault();
    try {
      console.log(input, "data yg dikirim");
      let { data } = await axios({
        method: "post",
        url: "http://localhost:3000/login",
        data: input,
      });
      localStorage.setItem("access_token", data.access_token);
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Success login!",
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: error.response.data.message,
      });
      console.log(error, "<<< error login");
    }
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-[#d9d9d9] p-7 md:p-10 shadow-md rounded h-3/5 md:h-1/3">
          <h1 className="text-center mb-14 md:mb-8 md:text-2xl text-xl font-semibold">
            Page Login
          </h1>
          <form onSubmit={hadleLogin} className="grid gap-4">
            <div className="grid md:text-lg md:flex md:justify-between">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="rounded p-2 border border-black md:ml-3"
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
            </div>
            <div className="grid md:text-lg md:flex md:justify-between mb-14 md:mb-8">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="rounded p-2 border border-black md:ml-3"
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
              />
            </div>
            <button
              className="py-2 px-5 rounded border border-black hover:bg-black hover:text-white md:text-lg"
              type="submit"
            >
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
