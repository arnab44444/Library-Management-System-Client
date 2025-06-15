import React from "react";
import useAxiosSecure from "../hook/useAxiosSecure";

const useBorrowApi = () => {
  const axiosSecure = useAxiosSecure();

  const myBorrowPromise = (email) => {
    return axiosSecure.get(`/my-orders?email=${email}`).then((res) => res.data);
  };

  return {
    myBorrowPromise
  };
};

export default useBorrowApi;
