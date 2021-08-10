import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import styles from "./form.module.css";
import { useFormspark } from "@formspark/use-formspark";

const FormInputs = () => {
	const FORMSPARK_FORM_ID = "OIc2QYhn";
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [succes, setSucces] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [submit] = useFormspark({
		formId: FORMSPARK_FORM_ID,
	});
	const onSubmit = async (data, e) => {
		e.preventDefault();
		await submit({ ...data })
			.then(() => {
				setSucces(true);
			})
			.catch((error) => setError(error));
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col"
			autoComplete="off"
		>
			<label
				htmlFor="email"
				className={classNames(styles.Label, "font-NeueLight bg-gray-50")}
			>
				<input
					type="text"
					id="email"
					className={classNames(
						styles.Input,
						"w-full focus:outline-none  bg-gray-50"
					)}
					placeholder="Email@example.com"
					{...register("email", {
						required: true,
						pattern: /^\S+@\S+$/i,
					})}
					disabled={succes}
				/>
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="bg-gray-50"
				>
					<path
						d="M10.2083 24.0989L11.3369 26.3561L21.6928 16.0002L11.3369 5.64428L10.2083 7.90147L17.9535 15.6466L18.307 16.0002L17.9535 16.3538L10.2083 24.0989Z"
						fill="black"
						fillOpacity="0.3"
						stroke="white"
					/>
					<rect
						x="-1"
						y="-1"
						width="30"
						height="30"
						transform="matrix(0 -1 -1 0 30 30)"
						stroke="white"
						strokeWidth="0"
					/>
				</svg>
			</label>
			{error || succes
				? null
				: errors.email?.type === "required" && (
						<span>Please Enter Your Email </span>
				  )}
			{error || succes
				? null
				: errors.email?.type === "pattern" && <span>Enter Valid Email </span>}

			{succes && <p className="font-bold my-2">Thank You!</p>}
			{succes
				? null
				: error && (
						<p className="font-bold my-2">Sorry something wrong happened.</p>
				  )}

			<input type="submit" hidden />
		</form>
	);
};
export default FormInputs;
