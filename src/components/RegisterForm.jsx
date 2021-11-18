import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerUser } from "../redux/authSlice";
import { useQuery } from "../utils/useQuery";
export default function RegisterForm() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [show, setShow] = useState(false);
  const query = useQuery();

  const { isLoggedIn, status } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerUser({
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
      })
    );
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
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          onChange={(e) => {
            setShow(true);
            setRegisterData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="text"
          placeholder="Full Name"
        />
        {show && registerData.name.length === 0 && (
          <small className="text-red-500">Name is required</small>
        )}
      </div>
      <div>
        <input
          onChange={(e) => {
            setShow(true);
            setRegisterData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          name="email"
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="email"
          placeholder="Email Address"
        />
        {show && registerData.email.length === 0 && (
          <small className="text-red-500">Email is required</small>
        )}
      </div>
      <div>
        <input
          onChange={(e) => {
            setShow(true);
            setRegisterData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          name="password"
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="password"
          placeholder="Your Password"
        />
        {show && registerData.password.length === 0 && (
          <small className="text-red-500">Password is required</small>
        )}
      </div>
      <div>
        <input
          name="confirm_password"
          onChange={(e) => {
            setShow(true);
            setRegisterData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="password"
          placeholder="Confirm Password"
        />
        {show && registerData.password !== registerData.confirm_password && (
          <small className="text-red-500">Your passwords did not match.</small>
        )}
      </div>
      <button
        className={
          registerData.email.length === 0 ||
          registerData.email.length === 0 ||
          registerData.password.length === 0 ||
          registerData.confirm_password !== registerData.password
            ? "w-full uppercase text-sm font-medium border-2 border-gray-300 bg-gray-300 text-white b py-3 transition-all my-4 cursor-not-allowed"
            : "w-full uppercase text-sm font-medium border-2 border-black bg-black text-white b py-3 transition-all my-4"
        }
      >
        {status === "loading" ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
