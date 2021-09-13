import React from "react";

export default function RegisterForm() {
  return (
    <div>
      <div className="my-4">
        <input type="text" placeholder="name" />
      </div>
      <div className="my-4">
        <input type="email" placeholder="email" />
      </div>
      <div className="my-4">
        <input type="password" placeholder="password" />
      </div>
    </div>
  );
}
