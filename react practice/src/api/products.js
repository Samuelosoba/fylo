import axiosInstance from "../utils/axiosinstance";

export const getProductsCategories = async () => {
  return await axiosInstance.get("/products/category-list");
};
