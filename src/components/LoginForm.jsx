import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn, status } = useSelector((state) => state.auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(loginData));
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn, history]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={(e) =>
              setLoginData({ ...loginData, [e.target.name]: e.target.value })
            }
            className="w-full p-2 my-3 border-2 border-gray-300"
            type="text"
            placeholder="Email Address"
            name="email"
          />
        </div>
        <div>
          <input
            onChange={(e) =>
              setLoginData({ ...loginData, [e.target.name]: e.target.value })
            }
            name="password"
            className="w-full p-2 my-3 border-2 border-gray-300"
            type="password"
            placeholder="Your Password"
          />
        </div>
        <button className="w-full uppercase text-sm font-medium border-2 border-black bg-black text-white b py-3 transition-all my-4">
          {status === "loading" ? "Loading..." : "Login"}
        </button>
      </form>
      <div className="uppercase text-center">or</div>
      <button className="w-full uppercase text-sm font-medium text-red-500 border-2 border-red-500 py-3 transition-all my-4">
        Login as guest
      </button>
    </>
  );
}
