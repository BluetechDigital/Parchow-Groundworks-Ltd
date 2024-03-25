"use client";

// Imports
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {INewsletter} from "@/types/components/index";

import router from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import {Field, Form, Formik, useFormik} from "formik";
import {sendAppointmentRequestForm} from "@/lib/appointmentRequest";
import {fadeIn, initial, fadeInUp, initialTwo} from "@/animations/animations";

// Styling
import Paragraph from "./Paragraph";

// Components

const Newsletter: FC<INewsletter> = ({paragraph}) => {
	// Loading, Send & Error Message States
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};

		if (!values?.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values?.email)
		) {
			errors.email = "Invalid email address";
		}

		return errors;
	};

	// Google ReCaptcha Validation
	const [reCaptchaResult, setReCaptchaResult] = useState(null);
	const googleReCaptchaValidate = (value: any) => {
		return value;
	};

	const handleReCaptchaChange = (response: any) => {
		const result = googleReCaptchaValidate(response);
		setReCaptchaResult(result);
	};

	/* Contact Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			email: "",
		},
		validate,
		onSubmit: async (values: any) => {
			if (reCaptchaResult) {
				try {
					console.log(values);
					await sendAppointmentRequestForm(values);
				} catch (error) {
					setErrorMessage(true);
					throw new Error(
						"Error Message: Something went wrong with Sending your Message. Please try again."
					);
				}
			} else {
				throw new Error(
					"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
				);
			}
		},
	});

	// Form Submission
	const onFormSubmit = (event: any) => {
		event.preventDefault();
		setErrorMessage(false);
		if (reCaptchaResult) {
			try {
				setLoading(true);
				/* Send Form Content */
				formik.handleSubmit();
				setLoading(false);
				setMessageSent(true);
				setTimeout(() => {
					router.reload();
				}, 3000);
			} catch (error) {
				setErrorMessage(true);
				throw new Error(
					"Error Message: Something went wrong with Sending your Message. Please try again."
				);
			}
		} else {
			throw new Error(
				"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
			);
		}
	};

	return (
		<>
			<Formik
				onSubmit={formik?.onSubmit}
				initialValues={formik?.initialValues}
				className="w-full"
			>
				<Form action="#">
					{loading ? (
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 text-xl font-bold text-center lg:text-left text-primary-two"
						>
							Sending Message...
						</motion.h4>
					) : messageSent ? (
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 text-xl font-bold text-center lg:text-left text-primary-two"
						>
							Message Sent!
						</motion.h4>
					) : errorMessage ? (
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 text-xl font-bold text-center lg:text-left text-primary-two"
						>
							Error Message: Something went wrong with sending your message.
							Please try again.
						</motion.h4>
					) : (
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 text-xl font-bold text-center lg:text-left text-black"
						></motion.h4>
					)}

					<Paragraph
						content={paragraph}
						tailwindStyling="mb-4 text-black text-base text-center lg:text-left"
					/>

					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-2 w-full"
					>
						{formik?.touched?.email && formik?.errors?.email ? (
							<div>
								<p className="py-1 text-left text-tiny text-primary-darker ">
									{formik?.errors?.email}
								</p>
							</div>
						) : null}
						<Field
							id="email"
							name="email"
							type="email"
							placeholder="Email Address"
							onBlur={formik?.handleBlur}
							onChange={formik?.handleChange}
							value={formik?.values?.email}
							className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
						/>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={formik?.touched?.email ? "block" : "hidden"}
					>
						<ReCAPTCHA
							sitekey={`6LfF-pwpAAAAAGNKKz5Ae7Cbh18aLprnrq3r-ZEe`}
							onChange={handleReCaptchaChange}
						/>
					</motion.div>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						onClick={onFormSubmit}
						disabled={
							!formik?.values?.email ||
							reCaptchaResult === null ||
							reCaptchaResult === undefined
						}
						className="mt-2 w-full inline-block text-white disabled:bg-opacity-20 disabled:cursor-not-allowed"
						type="submit"
					>
						<span className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-primary-default hover:bg-primary-two transition-all duration-200 ease-in-out">
							<span className="text-white tracking-widest text-tiny uppercase font-aspektaMain">
								{loading
									? "Sending Message..."
									: messageSent
									? "Message Sent!"
									: errorMessage
									? "Sending Error!"
									: "Send Message"}
							</span>
						</span>
					</motion.button>
				</Form>
			</Formik>
		</>
	);
};

export default Newsletter;
