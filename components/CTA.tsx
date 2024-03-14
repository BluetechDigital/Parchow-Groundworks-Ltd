// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ICTA} from "@/types/components/index";
import {useGlobalContext} from "@/context/global";
import {fadeIn, initialTwo} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const CTA: FC<ICTA> = ({title, paragraph, buttonLink, backgroundImage}) => {
	const globalContext = useGlobalContext();
	return (
		<>
			<div className="py-8">
				<div className="container mx-auto px-4">
					<div
						className="p-8 relative flex flex-col lg:flex-row gap-4 bg-cover bg-no-repeat bg-center"
						style={{
							backgroundImage: `linear-gradient(
							0deg,
							rgb(0, 0, 0, 0.20),
							rgba(0, 0, 0, 0.45),
							rgba(0, 0, 0, 0.55)
						),url("${backgroundImage}")`,
						}}
					>
						<div className="py-11 px-9 lg:max-w-xl bg-white">
							<div className="flex items-center justify-center mb-6 gap-4">
								<Link
									href={`${globalContext?.themesOptionsContent?.facebookLink}`}
									className={
										globalContext?.themesOptionsContent?.facebookLink
											? "inline-block px-1 hover:opacity-70"
											: "hidden"
									}
								>
									<svg
										height="100%"
										className="w-5 h-5"
										style={{
											fill: "#019931",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										width="100%"
									>
										<path
											d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
								<Link
									href={`${globalContext?.themesOptionsContent?.twitterLink}`}
									className={
										globalContext?.themesOptionsContent?.twitterLink
											? "inline-block px-1 hover:opacity-70"
											: "hidden"
									}
								>
									<svg
										height="100%"
										className="w-5 h-5"
										style={{
											fill: "#019931",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										width="100%"
									>
										<path
											d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
								<Link
									href={`${globalContext?.themesOptionsContent?.instagramLink}`}
									className={
										globalContext?.themesOptionsContent?.instagramLink
											? "inline-block px-1 hover:opacity-70"
											: "hidden"
									}
								>
									<svg
										viewBox="0 0 24 24"
										className="w-5 h-5"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
												fill="#019931"
											></path>{" "}
											<path
												d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
												fill="#019931"
											></path>{" "}
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
												fill="#019931"
											></path>
										</g>
									</svg>
								</Link>
							</div>
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 uppercase text-black text-center lg:text-left font-semibold text-lg md:text-xl"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="mb-6 lg:mb-0 text-black text-base text-center lg:text-left"
							/>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								className={`${buttonLink?.url ? "block" : "hidden"} lg:hidden`}
							>
								<div className="py-4 pl-4 pr-10 w-fit mx-auto lg:mx-0 cursor-pointer bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500">
									<h3 className="relative flex items-center justify-center font-semibold tracking-[0.10rem] uppercase pl-4 text-lightGrey text-tiny text-center">
										{buttonLink?.title}
										<Image
											width={550}
											height={550}
											alt="Black Arrow Icon"
											src="/svg/navigation-menu-dropdown-arrow-white.svg"
											className="my-auto ml-2 absolute top-[-20px] right-[-40px] rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
										/>
									</h3>
								</div>
							</Link>
						</div>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							className={`hidden absolute bottom-0 right-0 mb-8 mr-8 ${
								buttonLink?.url ? "lg:block" : "lg:hidden"
							}`}
						>
							<div className="py-6 pl-4 pr-10 w-fit mx-auto lg:mx-0 cursor-pointer bg-primary-default hover:bg-primary-dark transition-all ease-in-out duration-500">
								<h3 className="relative flex items-center justify-center font-semibold tracking-[0.10rem] uppercase pl-4 text-lightGrey text-tiny text-center">
									{buttonLink?.title}
									<Image
										width={550}
										height={550}
										alt="Black Arrow Icon"
										src="/svg/navigation-menu-dropdown-arrow-white.svg"
										className="my-auto ml-2 absolute top-[-25px] right-[-40px] rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
									/>
								</h3>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default CTA;
