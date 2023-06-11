import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IToastProps {
  light?: boolean;
  position: "bottom-right" | "top-right";
  autoClose: number;
  pauseOnHover?: boolean;
  status: "safe" | "danger";
  content: string;
}

const useToast = ({
  content,
  light = true,
  position = "bottom-right",
  autoClose = 3000,
  pauseOnHover,
  status,
}: IToastProps) => {
  const notify = () => {
    const params = {
      position: position,
      autoClose: autoClose,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: pauseOnHover,
      progress: undefined,
    };
    switch (status) {
      case "safe":
        toast.success(content, { ...params, theme: light ? "light" : "dark" });
        break;
      case "danger":
        toast.warn(content, { ...params, theme: light ? "light" : "dark" });
        break;
    }
  };

  return { notify, ToastContainer };
};

export default useToast;
