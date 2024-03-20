// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
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
	servicesList,
	buttonLinkTwo,
	backgroundImage,
}) => {
	return (
		<>
			<div className={styles.hero + " relative z-50 flex flex-col lg:mb-28"}>
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
									: "/svg/background/polygon-scatter-haikei-outline-green.svg"
							}")`,
					}}
				>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="lg:container px-4 lg:px-10 xl:px-0 mx-auto max-w-xl flex flex-col justify-center gap-2 h-full"
					>
						<motion.h1
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="max-w-2xl text-center lg:text-left uppercase text-lg sm:text-3xl lg:text-5xl xl:text-6xl text-white font-extrabold lg:leading-[3rem]"
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
									className={`py-4 px-6 text-center cursor-pointer bg-primary-light hover:bg-primary-default transition-all ease-in-out duration-500`}
								>
									<span className="tracking-[0.10rem] text-white text-base text-center uppercase font-aspektaMain">
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
									className={`py-4 px-6 text-center cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500`}
								>
									<span className="tracking-[0.10rem] text-white text-base text-center uppercase font-aspektaMain">
										{buttonLinkTwo?.title}
									</span>
								</div>
							</Link>
						</div>
					</motion.div>
				</div>
				<div className="relative flex flex-row py-0 justify-center items-center lg:justify-between">
					<ul className="hidden md:grid grid-cols-4 w-full lg:w-[90%] mx-auto bg-primary-dark absolute mb-[130px] lg:mb-[-30px] 2xl:mb-[0px] left-0 right-0 flex-row items-center justify-center">
						{servicesList?.length > 0 ? (
							servicesList?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.li
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<div className="flex flex-col items-center justify-center border-x-4 border-solid border-primary-three p-2 w-full h-full sm:min-h-[22.5vh] lg:min-h-[25vh] xl:max-h-[22.5vh] transition-all ease-in-out duration-500">
											<Image
												alt={item?.icon?.altText}
												src={item?.icon?.sourceUrl}
												width={item?.icon?.mediaDetails?.width}
												height={item?.icon?.mediaDetails?.height}
												className="my-4 w-[50px] h-[50px] object-contain object-center"
											/>
											<span className="text-white mt-2 font-semibold text-base uppercase font-aspektaMain leading-[1.5rem] text-center tracking-[0.10rem]">
												{item?.title}
											</span>
											<Paragraph
												content={item?.paragraph}
												tailwindStyling="p-2 text-white text-tiny text-center"
											/>
										</div>
									</motion.li>
								</Fragment>
							))
						) : (
							<></>
						)}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Hero;
