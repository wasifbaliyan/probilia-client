import React from "react";

export default function LoginForm() {
  return (
    <form>
      <div>
        <input
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="text"
          placeholder="Email Address"
        />
      </div>
      <div>
        <input
          className="w-full p-2 my-3 border-2 border-gray-300"
          type="password"
          placeholder="Your Password"
        />
      </div>
      <button className="w-full uppercase text-sm font-medium border-2 border-black bg-black text-white b py-3 transition-all my-4">
        Login
      </button>
      <div className="uppercase text-center">or</div>
      <button className="w-full uppercase text-sm font-medium text-red-500 border-2 border-red-500 py-3 transition-all my-4">
        Login as guest
      </button>
    </form>
  );
}
