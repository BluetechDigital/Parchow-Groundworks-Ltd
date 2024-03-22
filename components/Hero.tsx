// Imports
import {fadeIn, initial, stagger, initialTwo} from "../animations/animations";
import Link from "next/link";
import {FC} from "react";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const Hero: FC<IHero> = ({
	title,
	paragraph,
	buttonLink,
	buttonLinkTwo,
	backgroundImage,
}) => {
	return (
		<>
			<div className={styles.hero + " relative z-50 flex flex-col "}>
				<div
					className="lg:relative pb-8 lg:pb-28 pt-[85px] lg:pt-[110px] h-[90vh] flex flex-col lg:flex-row bg-primary-darker w-full bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `linear-gradient(
								0deg,
								rgb(0, 0, 0, 0.40),
								rgba(0, 0, 0, 0.40),
								rgba(0, 0, 0, 0.40)
							),url("${
								backgroundImage?.sourceUrl
									? backgroundImage?.sourceUrl
									: "/svg/background/grid-background-06.svg"
							}")`,
					}}
				>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="lg:container px-6 lg:px-10 xl:px-0 mx-auto max-w-xl flex flex-col justify-center gap-2 h-full"
					>
						<motion.h1
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="max-w-2xl text-center lg:text-left uppercase text-lg sm:text-xl lg:text-5xl xl:text-6xl text-white leading-snug lg:leading-[3rem]"
						>
							{title}
						</motion.h1>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-xl py-2 text-white leading-[1.5rem] text-base text-center lg:text-left"
						/>
						<div className="flex flex-col md:flex-row gap-4 max-w-sm lg:max-w-4xl mx-auto lg:mx-0">
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								className={`${buttonLink?.url ? "block" : "hidden"}`}
							>
								<div
									className={`w-fit mx-auto md:mx-0 py-4 px-6 text-center cursor-pointer bg-primary-light hover:bg-primary-default transition-all ease-in-out duration-500`}
								>
									<span className="tracking-[0.10rem] text-white text-tiny md:text-base text-center uppercase font-aspektaMain">
										{buttonLink?.title}
									</span>
								</div>
							</Link>
							<Link
								href={`${buttonLinkTwo?.url}`}
								target={buttonLinkTwo?.target}
								className={`${buttonLinkTwo?.url ? "block" : "hidden"}`}
							>
								<div
									className={`w-fit mx-auto md:mx-0 py-4 px-6 text-center cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500`}
								>
									<span className="tracking-[0.10rem] text-white text-tiny md:text-base text-center uppercase font-aspektaMain">
										{buttonLinkTwo?.title}
									</span>
								</div>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Hero;
