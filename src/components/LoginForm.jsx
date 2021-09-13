import React from "react";

export default function LoginForm() {
  return (
    <div>
      <div className="my-4">
        <input type="email" placeholder="email" />
      </div>
      <div className="my-4">
        <input type="password" placeholder="password" />
      </div>
    </div>
  );
}
