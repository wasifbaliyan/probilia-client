import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addNewAddress } from "../api";
import { getAddresses } from "../redux/accountSlice";

export default function AddressFormModal({ setOpenModal }) {
  const [address, setAddress] = useState({});
  const dispatch = useDispatch();
  const handleAddAdress = async () => {
    try {
      const response = await addNewAddress({ ...address });
      if (response) {
        toast.success("Address added successfully");

        dispatch(getAddresses());
      }
      setOpenModal(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again");
    }
  };

  return (
    <div className="w-full h-full top-0 left-0 fixed backdrop-filter backdrop-blur-sm z-10">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-10 rounded w-96">
          <div className="text-right">
            <button
              className="text-red-500"
              onClick={() => setOpenModal(false)}
            >
              X
            </button>
          </div>
          <h1 className="text-lg font-medium uppercase italic py-3">
            Enter Address Details
          </h1>
          <form>
            <div>
              <input
                onChange={(e) =>
                  setAddress((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="Full Name"
                name="name"
              />
            </div>
            <div>
              <input
                onChange={(e) =>
                  setAddress((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="Home Address, street etc."
                name="street"
              />
            </div>
            <div>
              <input
                onChange={(e) =>
                  setAddress((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="Country"
                name="country"
              />
            </div>
            <div>
              <input
                onChange={(e) =>
                  setAddress((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="State"
                name="state"
              />
            </div>
            <div>
              <input
                onChange={(e) =>
                  setAddress((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="City"
                name="city"
              />
            </div>
            <div>
              <input
                onChange={(e) =>
                  setAddress((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="Mobile Number"
                name="phone"
              />
            </div>
            <div>
              <input
                onChange={(e) =>
                  setAddress((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="Pin Code"
                name="pinCode"
              />
            </div>
          </form>
          <div className="mt-3 flex">
            <button
              onClick={handleAddAdress}
              className="w-40 uppercase text-sm font-medium mr-4 bg-red-500 border-red-500  border-2  text-white py-2 px-5 transition-all"
            >
              Submit
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="w-40 uppercase text-sm font-medium bg-white border-red-500  border-2  text-red-500 py-2 px-5 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
