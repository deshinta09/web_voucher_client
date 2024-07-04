import { useState } from "react";
import Swal from "sweetalert2";
import instance from "../config/instance";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function hadleRegister(e) {
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/register",
        data: input,
      });
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Success register!",
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: error.response.data.message,
      });
    }
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-[#d9d9d9] p-7 md:p-10 shadow-md rounded h-4/6 md:h-3/5">
          <h1 className="text-center mb-10 md:mb-8 md:text-2xl text-xl font-semibold">
            Register
          </h1>
          <form onSubmit={hadleRegister} className="grid gap-4">
            <div className="grid md:text-lg md:flex md:justify-between">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="rounded p-2 border border-black md:ml-3"
                onChange={(e) => setInput({ ...input, name: e.target.value })}
              />
            </div>
            <div className="grid md:text-lg md:flex md:justify-between">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="rounded p-2 border border-black md:ml-3"
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
            </div>
            <div className="grid md:text-lg md:flex md:justify-between mb-10 md:mb-8">
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
              Sigh In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
