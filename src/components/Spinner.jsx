import React from "react";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
    </div>
  );
}
