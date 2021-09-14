import React from "react";

export default function RegisterForm() {
  return (
    <form>
      <div className="">
        <input
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="text"
          placeholder="Full Name"
        />
      </div>
      <div className="">
        <input
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="email"
          placeholder="Email Address"
        />
      </div>
      <div className="">
        <input
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="password"
          placeholder="Your Password"
        />
      </div>
      <button className="w-full uppercase text-sm font-medium hover:bg-red-500 bg-black text-white py-3 transition-all my-4">
        Register
      </button>
    </form>
  );
}
