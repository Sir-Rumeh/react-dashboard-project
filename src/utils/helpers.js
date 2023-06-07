import { toast } from "react-toastify";

export const notifySuccess = (message) => {
	console.log(message);
	toast.success(message);
};
