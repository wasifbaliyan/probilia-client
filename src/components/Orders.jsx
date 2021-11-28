import React, { useEffect } from "react";
import Order from "./Order";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../redux/cartSlice";
import Spinner from "./Spinner";

export default function Orders() {
  const { orders, status } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <div className="p-5 relative">
      <h1 className="text-2xl font-light mb-5">My Orders</h1>
      <div>
        {status === "loading" && <Spinner />}
        {status === "success" &&
          orders.map((order) => <Order order={order} key={order._id} />)}
      </div>
    </div>
  );
}
