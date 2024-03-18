// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import {FC, Fragment} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ITitleContentImage} from "@/types/components";

// Components
import Paragraph from "./Elements/Paragraph";

const TitleContentImage: FC<ITitleContentImage> = ({
	title,
	image,
	subtitle,
	textTitle,
	paragraph,
	buttonLink,
	bulletPoints,
	displayContentOption,
	displayParagraphColor,
	displayBackgroundIcon,
	displayBackgroundColor,
}) => {
	let backgroundColor;
	let paragraphColor;

	switch (displayBackgroundColor) {
		case "White":
			backgroundColor = "bg-white";
			break;
		case "Grey":
			backgroundColor = "bg-lightGreyTwo";
			break;
		default:
			backgroundColor = "bg-white";
			break;
	}

	switch (displayParagraphColor) {
		case "Black":
			paragraphColor = "text-black";
			break;
		case "Grey":
			paragraphColor = "text-darkGrey";
			break;
		default:
			paragraphColor = "text-black";
			break;
	}
	return (
		<>
			<div className={`titleContentImage py-16 ${backgroundColor}`}>
				<div className="lg:container m-auto px-0">
					<div className={title && subtitle ? "block py-4" : "hidden"}>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-center lg:text-left text-base text-accent-default"
						>
							{subtitle}
						</motion.h4>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-2 max-w-3xl leading-[2.5rem] lg:leading-[3rem] uppercase text-black text-center lg:text-left font-semibold text-lg sm:text-3xl lg:text-6xl"
						>
							{title}
						</motion.h3>
					</div>
					<div
						className={`flex ${
							displayContentOption == "Right" ? "flex-col-reverse" : "flex-col"
						} gap-4 lg:gap-x-16 p-0 mx-auto items-center justify-center lg:flex-row`}
					>
						<motion.div
							viewport={{once: true}}
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							className={`${
								displayContentOption == "Right"
									? "bg-center bg-no-repeat bg-cover w-full lg:w-1/2 h-[350px] lg:h-[500px]"
									: "hidden"
							}`}
							style={{
								backgroundImage: `url(${image?.sourceUrl})`,
							}}
						></motion.div>
						<motion.div
							viewport={{once: true}}
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							className={`${
								displayContentOption == "Left"
									? "lg:items-end"
									: "lg:items-start"
							} lg:w-1/2 h-full`}
						>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className={`flex flex-col items-center py-10 px-4 lg:items-baseline`}
							>
								<motion.h3
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										textTitle
											? "mb-2 font-semibold text-center lg:text-left text-black text-medium"
											: "hidden"
									}
								>
									{textTitle}
								</motion.h3>
								<Paragraph
									content={paragraph}
									tailwindStyling={`lg:max-w-xl leading-[1.5rem] text-base text-center lg:text-left ${paragraphColor}`}
								/>
								<div className="flex flex-col my-8 lg:my-6 gap-4">
									{bulletPoints?.length > 0 ? (
										bulletPoints?.map((item: any, keys: number) => (
											<Fragment key={keys}>
												<motion.div
													custom={keys}
													initial={initial}
													whileInView="animate"
													viewport={{once: true}}
													variants={arrayLoopStaggerChildren}
												>
													<div className="flex items-center justify-start gap-3">
														<span>
															<svg
																fill="none"
																className="w-6 h-6"
																viewBox="0 0 24 24"
																xmlns="http://www.w3.org/2000/svg"
															>
																<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
																<g
																	id="SVGRepo_tracerCarrier"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																></g>
																<g id="SVGRepo_iconCarrier">
																	{" "}
																	<path
																		d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
																		fill="#f7a500"
																	></path>{" "}
																</g>
															</svg>
														</span>
														<span>
															<h4 className=" text-left text-black text-base">
																{item?.points}
															</h4>
														</span>
													</div>
												</motion.div>
											</Fragment>
										))
									) : (
										<></>
									)}
								</div>
								<div className={buttonLink?.title ? "flex mt-2" : "hidden"}>
									<Link
										href={`${buttonLink?.url}`}
										target={buttonLink?.target}
										className={`${buttonLink?.url ? "block" : "hidden"}`}
									>
										<div
											className={`py-4 px-6 text-center cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500`}
										>
											<h3 className="tracking-[0.10rem] text-white text-base text-center uppercase">
												{buttonLink?.title}
											</h3>
										</div>
									</Link>
								</div>
							</motion.div>
						</motion.div>
						<motion.div
							viewport={{once: true}}
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
							className={`${
								displayContentOption == "Left"
									? "bg-center bg-no-repeat bg-cover w-full lg:w-1/2 h-[350px] lg:h-[500px]"
									: "hidden"
							}`}
							style={{
								backgroundImage: `url(${image?.sourceUrl})`,
							}}
						></motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TitleContentImage;
