import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cookie from "js-cookie";
import { getUser } from "../apiCalls/user";
import { SetUser } from "../redux/userSlice";
// import { toast } from "react-hot-toast";
import Navbar from "./Navbar";

const PublicRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.user);       // Extract user property from redux state and store in the variable named as currentUser

  const fetchUser = async () => {
    try {
      const response = await getUser(cookie.get("token"));
      if (response.success) dispatch(SetUser(response.user));
      else cookie.remove("token");
    } catch (error) {
      // toast.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    if (!currentUser && cookie.get("token")) fetchUser();          // It ensures that if the currentUser is falsy(i.e.,not logged in) and it has token stored so call the fetchUser function.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PublicRoute;
