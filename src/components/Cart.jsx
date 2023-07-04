import React, { useState, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { toast } from "react-toastify";
import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import Button from "./Button";

import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
	// const { currentColor, handleClose } = useStateContext();
	// const [total, setTotal] = useState(0);
	// const [newCartData, setNewCartData] = useState([...cartData]);

	const notify = () => {
		// handleClose("cart");
		toast.success("Order Placed Successfully");
	};

	const updateCartData = (name, newValue) => {
		setNewCartData((prev) => {
			const updatedItems = prev.map((item) => {
				if (item.name === name) {
					return { ...item, units: newValue };
				}
				return item;
			});
			return updatedItems;
		});
	};

	useEffect(() => {
		let initial = 0;
		newCartData.forEach((item) => {
			initial += item.price * item.units;
			setTotal(initial);
		});
	}, [newCartData]);

	return (
		<div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
			<div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
				<div className="flex justify-between items-center">
					<p className="font-semibold text-lg">Shopping Cart</p>
					<Button
						icon={<MdOutlineCancel />}
						color="rgb(153, 171, 180)"
						bgHoverColor="light-gray"
						size="2xl"
						borderRadius="50%"
					/>
				</div>
				{newCartData?.map((item, index) => (
					<div key={index}>
						<div>
							<div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
								<img className="rounded-lg h-80 w-24" src={item.image} alt="" />
								<div>
									<p className="font-semibold ">{item.name}</p>
									<p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
										{item.category}
									</p>
									<div className="flex gap-4 mt-2 items-center">
										<p className="font-semibold text-lg">${item.price * item.units}</p>
										<div className="flex items-center border-1 border-r-0 border-color rounded">
											<button
												type="button"
												onClick={() => {
													updateCartData(item.name, item.units - 1);
												}}
												className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 hover:bg-gray-100"
											>
												<AiOutlineMinus />
											</button>
											<p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
												{item.units}
											</p>
											<button
												type="button"
												onClick={() => {
													updateCartData(item.name, item.units + 1);
												}}
												className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600 hover:bg-gray-100"
											>
												<AiOutlinePlus />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
				<div className="mt-3 mb-3">
					<div className="flex justify-between items-center mt-3">
						<p className="text-gray-500 dark:text-gray-200">Total</p>
						<p className="font-semibold">${total}</p>
					</div>
				</div>
				<div className="mt-5">
					<button
						type="button"
						onClick={notify}
						className="text-white text-center py-3 rounded-lg w-full"
						style={{ backgroundColor: currentColor }}
					>
						Place Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
