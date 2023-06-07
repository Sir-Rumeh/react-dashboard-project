import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import FormInput from "../../../components/formElements/FormInput";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const userLogin = ({ linkTo }) => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate(linkTo);
	};

	return (
		<section className="light-bg min-h-screen py-3">
			<form className="mt-8" onSubmit={handleLogin()} noValidate>
				<FormInput name="loginName" placeholder="Enter email address" label="Email" inputType="email" />
				<FormInput name="password" placeholder="Enter password" label="Password" inputType="password" />
				<div>
					<Button title={"Login"} type="submit" paddingY="py-[17px]" classes="grow" />
				</div>
			</form>
		</section>
	);
};
export default userLogin;
