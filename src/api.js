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
