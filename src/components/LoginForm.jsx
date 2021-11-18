import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useHistory } from "react-router-dom";
import { useQuery } from "../utils/useQuery";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const history = useHistory();
  const query = useQuery();
  const dispatch = useDispatch();
  const { isLoggedIn, status, errorMessage } = useSelector(
    (state) => state.auth
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
    if (errorMessage) {
      toast.error(errorMessage);
    }
    toast.success("Login successful");
  };

  const loginAsGuest = () => {
    setLoginData({ email: "potato@mail.com", password: "potato" });
    dispatch(loginUser({ email: "potato@mail.com", password: "potato" }));
    toast.success("Login successful");
  };
  useEffect(() => {
    if (isLoggedIn) {
      if (query.get("from")) {
        history.push(query.get("from"));
      } else {
        history.push("/");
      }
    }
  }, [isLoggedIn, history, query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={loginData.email}
            onChange={(e) => {
              setShow(true);
              setLoginData({ ...loginData, [e.target.name]: e.target.value });
            }}
            className="w-full p-2 my-3 border-2 border-gray-300"
            type="text"
            placeholder="Email Address"
            name="email"
          />
          {show && loginData.email.length === 0 && (
            <small className="text-red-500">Email is required</small>
          )}
        </div>
        <div>
          <input
            value={loginData.password}
            onChange={(e) => {
              setShow(true);
              setLoginData({ ...loginData, [e.target.name]: e.target.value });
            }}
            name="password"
            className="w-full p-2 my-3 border-2 border-gray-300"
            type="password"
            placeholder="Your Password"
          />
          {show && loginData.password.length === 0 && (
            <small className="text-red-500">Password is required</small>
          )}
        </div>
        <button
          disabled={
            loginData.email.length === 0 || loginData.password.length === 0
          }
          className={
            loginData.email.length === 0 || loginData.password.length === 0
              ? "w-full uppercase text-sm font-medium border-2 border-gray-300 bg-gray-300 text-white b py-3 transition-all my-4 cursor-not-allowed"
              : "w-full uppercase text-sm font-medium border-2 border-black bg-black text-white b py-3 transition-all my-4"
          }
        >
          {status === "loading" ? "Loading..." : "Login"}
        </button>
      </form>

      <div className="uppercase text-center">or</div>
      <button
        onClick={loginAsGuest}
        className="w-full uppercase text-sm font-medium text-red-500 border-2 border-red-500 py-3 transition-all my-4"
      >
        Login as guest
      </button>
    </>
  );
}
