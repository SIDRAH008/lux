// import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="form-2-wrapper">
    <div className="logo text-center">
    
    </div>
    <h2 className="text-center mb-4">Signup Into Your Account</h2>
    <form action="#">
      <div className="mb-3 form-box">
        <input
          type="Name"
          className="form-control"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          required
        />
      </div>
      <div className="mb-3 form-box">
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          id="number"
          name="number"
          placeholder="Enter Your Number"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter Your Password"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-outline-secondary login-btn w-100 mb-3"
      > Signup
      </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/login"}>
          <span className="text-blue-700">Log in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignUp;
