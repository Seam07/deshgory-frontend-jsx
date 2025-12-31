import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { authImg } from "../assets";

const ForgotPassword = () => {
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
        className="flex flex-col items-center justify-center gap-5 max-w-[500px] w-full bg-white rounded-[15px] md:rounded-lg py-15 px-10"
      >
        <header className="flex flex-col items-center justify-center gap-2 w-full">
          <h1 className="font-bold text-2xl text-center">
            Forgot Password?
          </h1>
          <p className="w-full max-w-[280px] text-center text-[15px] text-gray-600">
            Enter the email linked to your account, and we'll send you a link to
            reset your password.
          </p>

        </header>

        <input
          type="email"
          name="email"
          className="bg-transparent w-full px-4 py-2.5 rounded-lg text-sm border border-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />


        <button
          type="submit"
          className="p-3 rounded-lg text-white bg-purple-500 hover:bg-gradient-to-r from-purple-600 to-purple-500 transition duration ease-in-out w-full outline-none cursor-pointer"
        >
          Forgot Password
        </button>

        <Link
        to="/Login"
          className="p-3 rounded-lg text-white text-center bg-gray-400 hover:bg-gradient-to-r from-purple-600 to-purple-500 transition duration ease-in-out w-full outline-none cursor-pointer"
        >
          Back to Login
        </Link>

       
      </form>
    </div>
  );
};

export default ForgotPassword;
