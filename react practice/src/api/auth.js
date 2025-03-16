import axiosInstance from "../utils/axiosinstance";
export const loginUser = async (formData) => {
  return await axiosInstance.post("/auth/login", formData);
};
export const getAllProducts = async () => {
  return await axiosInstance.get("/products");
};
export const getAuthUser = async (accessToken) => {
  return await axiosInstance.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
