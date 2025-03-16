import { createContext, useContext } from "react";
//here we create the store
export const AuthContext = createContext({});
//we give rhe store a name we call to use it
export const useAuth = () => {
  const authStore = useContext(AuthContext);
  if (authStore === undefined) {
    throw new Error("useAuth must be defined within an Authprovider");
  }
  return authStore;
};
