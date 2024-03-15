// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ICTA} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const CTA: FC<ICTA> = ({title, paragraph, buttonLink, backgroundImage}) => {
	return (
		<>
			<div className="container mx-auto py-8 px-4">
				<div
					className="p-8 relative flex flex-col justify-end lg:flex-row gap-4 bg-cover bg-no-repeat bg-center"
					style={{
						backgroundImage: `url("${backgroundImage}")`,
					}}
				>
					<div className="py-10 px-8 lg:max-w-xl bg-white">
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
							className={`${buttonLink?.url ? "block" : "hidden"}`}
						>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mt-4 py-4 px-6 mx-auto lg:mx-0 cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500"
							>
								<h3 className="font-semibold tracking-[0.10rem] text-lightGrey text-tiny text-center">
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
