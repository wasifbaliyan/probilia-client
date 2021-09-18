import React, { useState } from "react";
import AddressFormModal from "./AddressFormModal";

export default function Address() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="my-10 relative">
      <h3 className="font-medium ">John Doe</h3>
      <p>772/81, Harish Nagar</p>
      <p>New Delhi, Delhi - 251001</p>
      <p>7676767676</p>
      <p>India</p>
      <div className="mt-3">
        <button
          onClick={() => setOpenModal(true)}
          className="w-40 uppercase text-sm font-medium mr-4 bg-red-500 border-red-500  border-2  text-white py-2 px-5 transition-all"
        >
          Edit
        </button>
        <button className="w-40 uppercase text-sm font-medium bg-white border-red-500  border-2  text-red-500 py-2 px-5 transition-all">
          Remove
        </button>
      </div>
      {openModal && <AddressFormModal setOpenModal={setOpenModal} />}
    </div>
  );
}
