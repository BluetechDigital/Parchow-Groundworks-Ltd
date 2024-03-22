// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IServicesGridCard} from "@/types/components";
import {fadeIn, initialTwo} from "@/animations/animations";

// Styling
import styles from "../../styles/components/OurServices.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const ServicesGridCard: FC<IServicesGridCard> = ({
	link,
	image,
	title,
	paragraph,
}) => {
	return (
		<>
			<Link href={`${link?.url}`} target={link?.target}>
				<div
					className={
						styles.content +
						" flex flex-col justify-between items-center h-full min-h-[450px] bg-primary-darker bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out md:hover:scale-105"
					}
					style={{
						backgroundImage: `linear-gradient(
										0deg,
										rgba(0, 0, 115, 0.15),
										rgba(0, 0, 115, 0.35),
										rgba(0, 0, 115, 0.45),
										rgba(0, 0, 115, 0.60)
									),url("${image?.sourceUrl}")`,
					}}
				>
					<div className="py-10 px-6 sm:px-10 sm:py-20 flex flex-col items-center justify-between gap-4 sm:gap-8 ">
						<div className="flex flex-col gap-6">
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-white text-lg leading-tight text-center uppercase font-aspektaMain tracking-[0.10rem]"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={
									paragraph?.length > 200
										? paragraph?.substring(0, 150) + "..."
										: paragraph
								}
								tailwindStyling="text-white text-base text-center"
							/>
						</div>
						<button className={`${link?.url ? "flex mx-auto" : "hidden"}`}>
							<div
								className={`w-fit mx-auto md:mx-0 py-4 px-6 text-center cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500`}
							>
								<span className="tracking-[0.10rem] text-white text-sm uppercase font-aspektaMain text-center">
									{link?.title}
								</span>
							</div>
						</button>
					</div>
				</div>
			</Link>
		</>
	);
};

export default ServicesGridCard;
