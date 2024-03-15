// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ICTA} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const CTA: FC<ICTA> = ({title, paragraph, buttonLink, backgroundImage}) => {
	return (
		<>
			<div className="hidden lg:block py-8 px-0">
				<div
					className="p-8 relative flex flex-col justify-end lg:flex-row gap-4 bg-cover bg-no-repeat bg-center"
					style={{
						backgroundImage: `url("${backgroundImage?.sourceUrl}")`,
					}}
				>
					<div className="py-10 px-8 lg:max-w-xl lg:container mx-auto lg:mx-0 bg-white">
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-3 max-w-xl mx-auto lg:mx-0 text-black text-center lg:text-left text-lg sm:text-3xl"
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
							className={`${buttonLink?.url ? "block" : "hidden"}`}
						>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mt-4 py-4 px-6 text-center cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500"
							>
								<h3 className="tracking-[0.10rem] text-white text-base text-center">
									{buttonLink?.title}
								</h3>
							</motion.div>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex lg:hidden flex-col-reverse lg:flex-row flex-wrap p-4 lg:p-10 -m-4">
				<div className="w-full p-4">
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
										? `block absolute inset-0 w-full h-full object-cover transform lg:group-hover:scale-105 transition-all ease-in-out duration-500 object-contain object-center`
										: `hidden`
								}
							/>
						</div>
					</Link>
				</div>
				<div className="w-full p-4">
					<div className="flex flex-col justify-between bg-blue-default h-full p-8">
						<div className="max-w-3xl mx-auto lg:mx-0">
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-4 text-center lg:text-left text-lg sm:text-3xl text-black"
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
								buttonLink?.url ? "block mx-auto lg:mx-0" : "hidden"
							}`}
						>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mt-4 py-4 px-6 mx-auto lg:mx-0 cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500"
							>
								<h3 className="tracking-[0.10rem] text-lightGrey text-tiny text-center">
									{buttonLink?.title}
								</h3>
							</motion.div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default CTA;
