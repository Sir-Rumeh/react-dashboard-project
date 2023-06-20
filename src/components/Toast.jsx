// import type { ToastContent, ToastOptions } from "react-toastify";

// import { toast } from "react-toastify";

const defaultOptions = {
	position: "top-right",

	autoClose: 5000,

	hideProgressBar: true,

	closeOnClick: true,

	pauseOnHover: true,

	draggable: true,

	progress: undefined,
};

const Toast = (message, option = {}) => {
	toast(message, { ...defaultOptions, ...option });
};

export default Toast;
