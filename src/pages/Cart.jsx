import React, { useEffect, useState } from "react";
import AddressSelectModal from "../components/AddressSelectModal";
import CartItem from "../components/CartItem";
import { getCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses } from "../redux/accountSlice";
import {
  getTotalDiscount,
  getTotalMRP,
  getTotalPaidAmount,
} from "../utils/payment";
import { placeNewOrder } from "../api";
import { useHistory } from "react-router";

export default function Cart() {
  const history = useHistory();

  const [openAddressSelectModal, setOpenAddressSelectModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const dispatch = useDispatch();
  const { cart, status } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const { addresses, status: addressStatus } = useSelector(
    (state) => state.account
  );

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  function getSelectedAddress() {
    if (addressStatus === "success" && selectedAddress) {
      return addresses.find((add) => add._id === selectedAddress);
    }
    return null;
  }

  async function handlePlaceOrder() {
    const orderData = {
      products: cart.products,
      payment: {
        totalAmount: getTotalMRP(cart.products),
        totalDiscount: getTotalDiscount(cart.products),
        totalPaidAmount: getTotalPaidAmount(cart.products),
      },
      addressId: selectedAddress,
    };
    console.log("OrderData", orderData);
    if (selectedAddress) {
      const response = await placeNewOrder(orderData);
      if (response) {
        dispatch(getCart());
        return history.push("/order-success");
      }
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto pb-20 ">
      <h1 className="uppercase italic text-3xl font-medium text-center py-10">
        My Cart
      </h1>
      <hr />
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && cart.products.length === 0 && (
        <div className="text-center">No products in the cart.</div>
      )}
      {status === "success" && cart.products.length !== 0 && (
        <div className="grid grid-cols-5 pt-10">
          <div className="col-span-5 md:col-span-3 bg-white pt-10 px-5 pb-5">
            <div className="flex justify-between mb-3">
              {getSelectedAddress() && (
                <div>
                  <div className="font-medium mb-2">
                    <span className="font-normal">Address:</span>{" "}
                    {getSelectedAddress().name}
                  </div>
                  <p className="text-gray-700">
                    {getSelectedAddress().street},
                  </p>
                  <p className="text-gray-700">
                    {getSelectedAddress().city}-{getSelectedAddress().pinCode}
                  </p>
                  <p className="text-gray-700">
                    {getSelectedAddress().state}, {getSelectedAddress().country}
                  </p>
                </div>
              )}
              <div className="relative">
                <button
                  onClick={() => setOpenAddressSelectModal(true)}
                  className="uppercase text-sm font-medium bg-white border-red-500  border-2  text-red-500 py-1 px-5 transition-all"
                >
                  Select Address
                </button>
                {openAddressSelectModal && (
                  <AddressSelectModal
                    setSelectedAddress={setSelectedAddress}
                    setOpenAddressSelectModal={setOpenAddressSelectModal}
                  />
                )}
              </div>
            </div>
            <div>
              {cart.products.map((product) => (
                <CartItem key={product._id} product={product} />
              ))}
            </div>
          </div>

          <div className="col-span-5 md:col-span-2 bg-gray-200 p-5">
            <h1 className=" font-medium text-lg  italic py-3 mb-5">
              Payment Details
            </h1>
            <div className="flex pb-3 justify-between">
              <p className=" text-gray-700">Total MRP</p>
              <h3 className="font-medium  ml-4">
                ₹
                {cart.products &&
                  cart.products.length !== 0 &&
                  getTotalMRP(cart.products)}
              </h3>
            </div>

            <div className="flex py-2 justify-between">
              <p className=" text-gray-700">Discount</p>
              <h3 className="font-medium  ml-4 text-green-500">
                ₹
                {cart.products &&
                  cart.products.length !== 0 &&
                  getTotalDiscount(cart.products)}
              </h3>
            </div>

            <div className="flex py-2 justify-between">
              <p className=" font-medium">Total Paid</p>
              <h3 className="font-medium  ml-4 ">
                ₹
                {cart.products &&
                  cart.products.length !== 0 &&
                  getTotalPaidAmount(cart.products)}
              </h3>
            </div>
            <div>
              <button
                onClick={handlePlaceOrder}
                disabled={cart.products && cart.products.length === 0}
                className={
                  !selectedAddress
                    ? "mt-8 uppercase text-sm w-full py-2 bg-gray-300  border-gray-300 text-white cursor-not-allowed"
                    : "mt-8 uppercase text-sm w-full py-2 hover:bg-red-400 transition-all hover:border-red-400 bg-red-500 border-2 border-red-500 text-white"
                }
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
