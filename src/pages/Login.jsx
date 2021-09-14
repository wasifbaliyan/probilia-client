import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="p-5 mx-auto max-w-screen-xl">
      <div className="bg-white max-w-screen-sm mx-auto px-14 py-16 rounded mt-10 mb-16">
        <h1 className="uppercase italic text-2xl font-semibold text-center mb-8">
          {isLogin ? "Login to your Account" : "Create New Account"}
        </h1>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        {isLogin && (
          <div className="mt-5">
            Not a user yet?
            <button
              className="text-red-500 hover:text-red-600 ml-1"
              onClick={() => setIsLogin(false)}
            >
              Register here
            </button>
          </div>
        )}
        {!isLogin && (
          <div className="mt-5">
            Already have an account?
            <button
              className="text-red-500 hover:text-red-600 ml-1"
              onClick={() => setIsLogin(true)}
            >
              Login here
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
