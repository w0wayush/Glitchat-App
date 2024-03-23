import { toast } from "react-toastify";

export const toastSucc = (msg: string) => {
  toast.success(msg);
};

export const toastErr = (msg: string) => {
  toast.error(msg);
};

export const toastWarn = (msg: string) => {
  toast.warn(msg);
};

export const toastInfo = (msg: string) => {
  toast.info(msg);
};
