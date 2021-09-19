import axios from "axios";

export const addToWishlist = async (data) => {
  const response = await axios.post("/api/wishlist", data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const removeFromWishlist = async (data) => {
  const response = await axios.delete("/api/wishlist/" + data.productId);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const addToCart = async (data) => {
  const response = await axios.post("/api/cart", data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const removeFromCart = async (data) => {
  const response = await axios.delete("/api/cart/" + data.productId);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const addNewAddress = async (data) => {
  const response = await axios.post("/api/addresses", data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const updateAddress = async (data) => {
  const response = await axios.put("/api/addresses/" + data._id, data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const deleteAddress = async (id) => {
  const response = await axios.delete("/api/addresses/" + id);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const placeNewOrder = async (data) => {
  const response = await axios.post("/api/orders", data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};
