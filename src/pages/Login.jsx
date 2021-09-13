import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="py-5 px-5  mx-auto max-w-screen-xl">
      <div className="bg-white max-w-lg  mx-auto">
        {isLogin ? <LoginForm /> : <RegisterForm />}
        {isLogin && (
          <button onClick={() => setIsLogin(false)}>Register here</button>
        )}
        {!isLogin && (
          <button onClick={() => setIsLogin(true)}>Login here</button>
        )}
      </div>
    </div>
  );
}
