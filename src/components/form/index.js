import React from "react";
import FormInputs from "./form";
const Form = () => {
	return (
		<section className="min-h-screen relative">
			<article className="flex flex-col  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9/12 mx-auto">
				<h1 className="font-NeueBold font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-10">
					We’re still building this website!
				</h1>
				<h2 className="font-NeueThin text-3xl sm:text-4xl md:text-5xl mb-16">
					Be the first to hear about.
				</h2>
				<div>
					<FormInputs />
				</div>
			</article>{" "}
		</section>
	);
};
export default Form;
