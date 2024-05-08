import React from "react";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { login } from "../redux/slices/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setLoginData({
      ...LoginData,
      [name]: value,
    });
  }

  async function onLogin(event) {
    event.preventDefault();
    if (!LoginData.email || !LoginData.password) {
      toast.error("Please fill all the details");
      return;
    }

    // checking name field length

    // checking valid email

    // checking password validation

    // dispatch create account action
    const response = await dispatch(login(LoginData));
    console.log(response);
    if (response?.payload?.success) navigate("/");

    setLoginData({
      email: "",
      password: "",
    });
  }

  return (
    <HomeLayout>
      <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
        <form
          action=""
          onSubmit={onLogin}
          noValidate
          className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-bold"> Login Page</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Enter your email.."
              className="bg-transparent px-2 py-1 border"
              onChange={handleUserInput}
              value={LoginData.email}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              {" "}
              Password{" "}
            </label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Enter your password.."
              className="bg-transparent px-2 py-1 border"
              onChange={handleUserInput}
              value={LoginData.password}
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
          >
            Login account
          </button>

          <p className="text-center">
            Don't have an account ?{" "}
            <Link to="/signup" className="link text-accent cursor-pointer">
              {" "}
              Signup
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Login;
