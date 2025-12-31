import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaGoogle, FaFacebook } from "../icons";
import { authImg } from "../assets";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Data Submitted:", formData);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center bg-purple-200 w-full h-screen p-5 md:p-10">
      <img src={authImg} alt="auth-img" className="w-[750px] hidden xl:block" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-5 max-w-[500px] w-full bg-white rounded-[15px] md:rounded-lg py-10 px-10 shadow-lg"
      >
        <header className="flex flex-col gap-5 w-full">
          <h1 className="font-bold text-2xl sm:text-3xl pb-3 text-center">
            Sign In
          </h1>

          <div className="flex sm:flex-row flex-col items-center gap-3 w-full">
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-gradient-to-r from-purple-600 to-purple-500 text-white transition duration ease-in-out w-full p-3 rounded-[10px] text-sm outline-none cursor-pointer"
            >
              <FaGoogle className="text-white" size={15} />
              Sign in with Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-gradient-to-r from-purple-600 to-purple-500 text-white transition duration ease-in-out w-full p-3 rounded-[10px] text-sm outline-none cursor-pointer"
            >
              <FaFacebook className="text-white" size={15} />
              Sign in with Facebook
            </button>
          </div>

          <div className="flex items-center justify-center py-4 w-full relative mt-1">
            <p className="w-full border-t border-gray-400"></p>
            <p className="text-sm px-2 absolute bg-white whitespace-nowrap">
              or sign in with{" "}
            </p>
            <p className="w-full border-t border-gray-400"></p>
          </div>
        </header>

        <input
          type="text"
          name="email"
          className="bg-transparent w-full px-4 py-2.5 rounded-lg text-sm border border-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Username or Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          className="bg-transparent w-full px-4 py-2.5 rounded-lg text-sm border border-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="flex items-center justify-between w-full text-sm">
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <span>Remember me</span>
          </label>

          <Link
            to="/ForgotPassword"
            className="font-semibold text-purple-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="p-3 rounded-lg text-white bg-purple-500 hover:bg-gradient-to-r from-purple-600 to-purple-500 transition duration ease-in-out w-full outline-none cursor-pointer"
        >
          Sign In{" "}
        </button>

        <p className="text-sm">
            New here?{" "}
            <Link to="/SignUp" className="font-semibold text-purple-500 hover:underline">
                Create an Account
            </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
