import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAddress } from "../api";
import { getAddresses } from "../redux/accountSlice";
import EditAddressModal from "./EditAddressModal";

export default function Address({ address }) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const handleRemoveAddress = async () => {
    const confirm = window.confirm(
      "Are you sure you want delete this address?"
    );
    if (!confirm) {
      return;
    }
    const response = await deleteAddress(address._id);
    if (response) {
      dispatch(getAddresses());
    }
  };

  return (
    <div className="my-10 relative">
      <h3 className="font-medium ">{address.name}</h3>
      <p className="py-1">{address.street}</p>
      <p>
        {address.city}, {address.state}-{address.pinCode}
      </p>
      <p className="py-1">{address.phone}</p>
      <p>{address.country}</p>
      <div className="mt-3">
        <button
          onClick={() => setOpenModal(true)}
          className="w-40 mb-2 uppercase text-sm font-medium mr-4 bg-red-500 border-red-500  border-2  text-white py-1 px-3 transition-all"
        >
          Edit
        </button>
        <button
          onClick={handleRemoveAddress}
          className="w-40 mb-2 uppercase text-sm font-medium bg-white border-red-500  border-2  text-red-500 py-1 px-3 transition-all"
        >
          Remove
        </button>
      </div>
      {openModal && (
        <EditAddressModal
          recievedAddress={address}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
}
