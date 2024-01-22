import axios from "axios";

const API_ENDPOINT = "https://dummyjson.com/products";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
