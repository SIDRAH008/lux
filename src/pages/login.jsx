import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          "http://localhost:3000/users/signin",
          JSON.stringify(values),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = res.data;
        console.log(data);
        if (data.success === false) {
          console.log(data.message);
          return;
        }
        localStorage.setItem("authToken", data.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      } catch (error) {
        console.log("SignIn", error);
      }
    },
  });

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center right-side">
            <div className="form-2-wrapper">
              <div className="logo text-center">
              
              </div>
              <h2 className="text-center mb-4">Login Into Your Account</h2>
              <form action="#">
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
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="rememberMe"
                    >
                      Remember me
                    </label>
                    <a
                      href="forget-3.html"
                      className="text-decoration-none float-end"
                    >
                      Forget Password
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-secondary login-btn w-100 mb-3"
                >
                  Login
                </button>
                <div className="social-login mb-3 type--A">
                  <h5 className="text-center mb-3">Social Login</h5>
                  <button className="btn btn-outline-secondary mb-3">
                    <i className="fa-brands fa-google text-danger"></i> Sign With
                    Google
                  </button>
                  <button className="btn btn-outline-secondary mb-3">
                    <i className="fa-brands fa-facebook-f text-primary"></i> Sign
                    With Facebook
                  </button>
                </div>
              </form>
              <p className="text-center register-test mt-3">
                Don't have an account?{" "}
                <a href="register-3.html" className="text-decoration-none">
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
