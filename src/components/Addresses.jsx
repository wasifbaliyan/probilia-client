import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses } from "../redux/accountSlice";
import Address from "./Address";
import AddressFormModal from "./AddressFormModal";
import Spinner from "./Spinner";

export default function Addresses() {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const { addresses, status } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  return (
    <div className="p-5 relative">
      <h1 className="text-2xl font-light mb-5">My Addresses</h1>
      <button
        onClick={() => setOpenModal(true)}
        className="uppercase text-sm font-medium text-left bg-white text-red-500 py-2  transition-all"
      >
        Add new address
      </button>
      <div>
        {status === "loading" && <Spinner />}
        {status === "success" &&
          addresses.map((address) => (
            <Address address={address} key={address._id} />
          ))}
      </div>
      {openModal && <AddressFormModal setOpenModal={setOpenModal} />}
    </div>
  );
}
