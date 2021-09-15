import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerUser } from "../redux/authSlice";
export default function RegisterForm() {
  const [registerData, setRegisterData] = useState({});

  const { isLoggedIn, status } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      registerUser({
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
      })
    );
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn, history]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          onChange={(e) =>
            setRegisterData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="text"
          placeholder="Full Name"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setRegisterData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          name="email"
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="email"
          placeholder="Email Address"
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setRegisterData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          name="password"
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="password"
          placeholder="Your Password"
        />
      </div>
      <div>
        <input
          name="confirm_password"
          onChange={(e) =>
            setRegisterData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <button className="w-full uppercase text-sm font-medium border-2 border-black bg-black text-white b py-3 transition-all my-4">
        {status === "loading" ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
