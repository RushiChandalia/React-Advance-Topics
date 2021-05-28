import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ToastContainer, toast } from "react-toastify";

const Toast: React.FC = () => {
  const { error } = useContext(GlobalContext);
  if (error !== undefined) {
    toast.error(error, { toastId: "Error" });
    return <ToastContainer position="bottom-right" autoClose={2000} />;
  }
  return <></>;
};

export default Toast;
