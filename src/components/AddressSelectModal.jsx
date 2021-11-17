import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses } from "../redux/accountSlice";
import Address from "./Address";

export default function AddressSelectModal({
  setOpenAddressSelectModal,
  setSelectedAddress,
}) {
  const dispatch = useDispatch();
  const { addresses, status } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);
  return (
    <div className="w-full h-full top-0 left-0 fixed backdrop-filter backdrop-blur-sm z-10">
      <div className="flex justify-center items-center h-full z-50">
        <div className="bg-white p-10 rounded  overflow-y-scroll h-full">
          <div className="text-right">
            <button
              className="text-red-500"
              onClick={() => setOpenAddressSelectModal(false)}
            >
              X
            </button>
          </div>
          <h1 className=" font-medium text-xl text-center italic py-3 px-16">
            Select Address
          </h1>
          <div>
            {status === "loading" && "Loading..."}
            {status === "success" &&
              addresses.map((address) => (
                <div key={address._id} className="flex">
                  <input
                    onChange={(e) => {
                      setSelectedAddress(e.target.value);
                      setOpenAddressSelectModal(false);
                    }}
                    className="my-10 w-5 h-5 mr-4"
                    type="radio"
                    name="address"
                    value={address._id}
                  />
                  <Address address={address} />
                </div>
              ))}
          </div>
          <div className="mt-5">
            <button
              onClick={() => setOpenAddressSelectModal(false)}
              className=" uppercase text-sm font-medium bg-white border-red-500  border-2  text-red-500 py-1 px-5 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
