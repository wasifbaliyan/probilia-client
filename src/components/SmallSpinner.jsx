import React from "react";

export default function SmallSpinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-500"></div>
    </div>
  );
}
