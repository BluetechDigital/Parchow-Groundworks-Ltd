// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IOurLocation} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const OurLocation: FC<IOurLocation> = ({title, paragraph}) => {
	return (
		<>
			<div className="bg-white">
				<div className="container x-0 mx-auto">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={`${
							title && paragraph
								? "flex flex-col items-center py-12 sm:py-16 px-4"
								: "hidden"
						}`}
					>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-3 max-w-xl mx-auto lg:mx-0 text-primary-default uppercase font-aspektaMain leading-[2.25rem] text-center lg:text-left text-lg sm:text-3xl"
						>
							{title}
						</motion.h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black text-base text-center"
						/>
					</motion.div>
				</div>
				<div>
					<iframe
						width="100%"
						height="350"
						loading="lazy"
						style={{border: "0"}}
						allowFullScreen={true}
						referrerPolicy="no-referrer-when-downgrade"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8471.911404124412!2d-1.0601882834643046!3d50.85497408409538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874688b751e688f%3A0xf043cb9f256783c5!2sParchow%20Groundworks%20Limited!5e0!3m2!1sen!2suk!4v1711221182165!5m2!1sen!2suk"
					></iframe>
				</div>
			</div>
		</>
	);
};

export default OurLocation;
