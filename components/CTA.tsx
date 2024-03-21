// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ICTA} from "@/types/components/index";
import {fadeIn, initialTwo} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const CTA: FC<ICTA> = ({title, paragraph, buttonLink, backgroundImage}) => {
	return (
		<>
			<div className="flex flex-col-reverse lg:flex-row flex-wrap p-4 lg:p-10 -m-4">
				<div className="w-full lg:w-5/12 p-4">
					<Link
						href={buttonLink?.url}
						target={buttonLink?.target}
						className={buttonLink?.url ? "block group" : "hidden"}
					>
						<div className="relative overflow-hidden h-[325px] lg:h-[400px]">
							<Image
								alt={backgroundImage?.altText}
								src={backgroundImage?.sourceUrl}
								width={backgroundImage?.mediaDetails?.width}
								height={backgroundImage?.mediaDetails?.height}
								className={
									backgroundImage?.sourceUrl
										? `block absolute inset-0 w-full h-full transform lg:group-hover:scale-105 transition-all ease-in-out duration-500 object-cover object-center`
										: `hidden`
								}
							/>
						</div>
					</Link>
				</div>
				<div className="w-full lg:w-7/12 p-4">
					<div
						className="flex flex-col justify-between bg-blue-default h-full p-8 bg-cover bg-no-repeat bg-center"
						style={{
							backgroundImage: `linear-gradient(
										0deg,
										rgba(255, 255, 255, 0.50),
										rgba(255, 255, 255, 0.65),
										rgba(255, 255, 255, 0.75),
										rgba(255, 255, 255, 0.85)
									),url("/svg/background/grid-background-06.svg")`,
						}}
					>
						<div className="max-w-3xl mx-auto lg:mx-0">
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-4 text-center uppercase font-aspektaMain font-semibold leading-tight lg:text-left text-black text-lg sm:text-3xl"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="text-black leading-[1.75rem] text-paragraph text-center lg:text-left"
							/>
						</div>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							className={`${
								buttonLink?.url ? "block mt-4 w-fit mx-auto lg:mx-0" : "hidden"
							}`}
						>
							<div
								className={`py-4 px-6 text-center cursor-pointer bg-primary-three hover:bg-primary-dark transition-all ease-in-out duration-500`}
							>
								<span className="tracking-[0.10rem] text-white text-base uppercase font-aspektaMain text-center">
									{buttonLink?.title}
								</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default CTA;
