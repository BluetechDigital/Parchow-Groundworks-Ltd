// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";
import {initial, stagger, fadeInUp} from "../animations/animations";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const Hero: FC<IHero> = ({
	title,
	cardOne,
	cardTwo,
	cardFour,
	cardThree,
	paragraph,
	buttonLink,
	buttonLinkTwo,
}) => {
	return (
		<>
			<div
				className={
					styles.hero +
					" relative z-50 flex flex-col bg-center bg-no-repeat bg-cover"
				}
				style={{
					backgroundImage: `linear-gradient(
								0deg,
								rgb(255, 255, 255, 0.90),
								rgba(255, 255, 255, 0.90),
								rgba(255, 255, 255, 0.90),
								rgba(255, 255, 255, 0.95)
							),url("/svg/background/grid-background-12.svg")`,
				}}
			>
				<div className="lg:relative pb-4 pt-[85px] lg:pt-[110px] flex flex-col items-center">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="lg:container mx-auto w-full flex flex-col gap-4 px-4 py-12 lg:py-8"
					>
						<div className="flex flex-col">
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="max-w-7xl mx-auto text-center uppercase font-aspektaMain text-lg sm:text-xl lg:text-5xl xl:text-6xl text-primary-default leading-snug lg:leading-[3rem]"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-full lg:max-w-xl mx-auto leading-7 text-black text-base text-center"
							/>
						</div>
						<div className="flex lg:hidden flex-col items-center justify-start gap-4">
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								className={`${buttonLink?.url ? "block w-full" : "hidden"}`}
							>
								<div
									className={`mx-auto md:mx-0 py-4 px-6 lg:px-10 text-center cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500`}
								>
									<span className="tracking-[0.10rem] text-white text-tiny md:text-base uppercase font-aspektaMain text-center">
										{buttonLink?.title}
									</span>
								</div>
							</Link>
							<Link
								href={`${buttonLinkTwo?.url}`}
								target={buttonLinkTwo?.target}
								className={`${buttonLinkTwo?.url ? "block w-full" : "hidden"}`}
							>
								<div
									className={`mx-auto md:mx-0 py-4 px-6 lg:px-10 text-center cursor-pointer bg-primary-three hover:bg-primary-dark transition-all ease-in-out duration-500`}
								>
									<span className="tracking-[0.10rem] text-white text-tiny md:text-base uppercase font-aspektaMain text-center">
										{buttonLinkTwo?.title}
									</span>
								</div>
							</Link>
						</div>
					</motion.div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4 py-4">
						<div className="cardOne flex flex-col overflow-hidden">
							<Link
								href={`${cardOne?.buttonLink?.url}`}
								target={cardOne?.buttonLink?.target}
								className={
									styles.card +
									" bg-white transform lg:hover:scale-105 transition-all ease-in-out duration-500"
								}
							>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="bg-primary-darker group-hover:bg-primary-darker relative px-4 py-6 w-full lg:py-12 h-[350px] md:h-[450px] xl:h-[650px] bg-center bg-no-repeat bg-cover"
									style={{
										backgroundImage: `url("${cardOne?.backgroundImage?.sourceUrl}")`,
									}}
								>
									<div className="absolute -top-[-50px] left-0 w-fit py-2 px-4 bg-lightGreyTwo hover:bg-lightGrey">
										<motion.h3
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="text-left text-primary-default uppercase font-aspektaMain text-paragraph"
										>
											{cardOne?.text}
										</motion.h3>
									</div>
									<div
										className={
											cardOne?.buttonLink?.url
												? "absolute -bottom-0 right-0"
												: "hidden"
										}
									>
										<div className="w-fit p-2 bg-lightGreyTwo hover:bg-lightGrey">
											<Image
												width={550}
												height={550}
												alt="Right Direction Yellow Arrow Icon"
												src="/svg/right-direction-yellow.svg"
												className="cursor-pointer w-full h-[35px] rotate-[-45deg] object-contain object-center"
											/>
										</div>
									</div>
								</motion.div>
							</Link>
						</div>
						<div className="cardTwo flex flex-col overflow-hidden">
							<Link
								href={`${cardTwo?.buttonLink?.url}`}
								target={cardTwo?.buttonLink?.target}
								className={
									styles.card +
									" bg-white transform lg:hover:scale-105 transition-all ease-in-out duration-500"
								}
							>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="bg-primary-darker group-hover:bg-primary-darker relative px-4 py-6 w-full lg:py-12 h-[350px] md:h-[450px] xl:h-[650px] bg-center bg-no-repeat bg-cover"
									style={{
										backgroundImage: `url("${cardTwo?.backgroundImage?.sourceUrl}")`,
									}}
								>
									<div className="absolute -top-[-50px] left-0 w-fit py-2 px-4 bg-lightGreyTwo hover:bg-lightGrey">
										<motion.h3
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="text-left text-primary-default uppercase font-aspektaMain text-paragraph"
										>
											{cardTwo?.text}
										</motion.h3>
									</div>
									<div
										className={
											cardTwo?.buttonLink?.url
												? "absolute -bottom-0 right-0"
												: "hidden"
										}
									>
										<div className="w-fit p-2 bg-lightGreyTwo hover:bg-lightGrey">
											<Image
												width={550}
												height={550}
												alt="Right Direction Yellow Arrow Icon"
												src="/svg/right-direction-yellow.svg"
												className="cursor-pointer w-full h-[35px] rotate-[-45deg] object-contain object-center"
											/>
										</div>
									</div>
								</motion.div>
							</Link>
						</div>
						<div className="cardThree flex flex-col overflow-hidden">
							<Link
								href={`${cardThree?.buttonLink?.url}`}
								target={cardThree?.buttonLink?.target}
								className={
									styles.card +
									" bg-white transform lg:hover:scale-105 transition-all ease-in-out duration-500"
								}
							>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="bg-primary-darker group-hover:bg-primary-darker relative px-4 py-6 w-full lg:py-12 h-[350px] md:h-[450px] xl:h-[650px] bg-center bg-no-repeat bg-cover"
									style={{
										backgroundImage: `url("${cardThree?.backgroundImage?.sourceUrl}")`,
									}}
								>
									<div className="absolute -top-[-50px] left-0 w-fit py-2 px-4 bg-lightGreyTwo hover:bg-lightGrey">
										<motion.h3
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="text-left text-primary-default uppercase font-aspektaMain text-paragraph"
										>
											{cardThree?.text}
										</motion.h3>
									</div>
									<div
										className={
											cardThree?.buttonLink?.url
												? "absolute -bottom-0 right-0"
												: "hidden"
										}
									>
										<div className="w-fit p-2 bg-lightGreyTwo hover:bg-lightGrey">
											<Image
												width={550}
												height={550}
												alt="Right Direction Yellow Arrow Icon"
												src="/svg/right-direction-yellow.svg"
												className="cursor-pointer w-full h-[35px] rotate-[-45deg] object-contain object-center"
											/>
										</div>
									</div>
								</motion.div>
							</Link>
						</div>
						<div className="cardFour flex flex-col overflow-hidden">
							<Link
								href={`${cardFour?.buttonLink?.url}`}
								target={cardFour?.buttonLink?.target}
								className={
									styles.card +
									" bg-white transform lg:hover:scale-105 transition-all ease-in-out duration-500"
								}
							>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="bg-primary-darker group-hover:bg-primary-darker relative px-4 py-6 w-full lg:py-12 h-[350px] md:h-[450px] xl:h-[650px] bg-center bg-no-repeat bg-cover"
									style={{
										backgroundImage: `url("${cardFour?.backgroundImage?.sourceUrl}")`,
									}}
								>
									<div className="absolute -top-[-50px] left-0 w-fit py-2 px-4 bg-lightGreyTwo hover:bg-lightGrey">
										<motion.h3
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="text-left text-primary-default uppercase font-aspektaMain text-paragraph"
										>
											{cardFour?.text}
										</motion.h3>
									</div>
									<div
										className={
											cardFour?.buttonLink?.url
												? "absolute -bottom-0 right-0"
												: "hidden"
										}
									>
										<div className="w-fit p-2 bg-lightGreyTwo hover:bg-lightGrey">
											<Image
												width={550}
												height={550}
												alt="Right Direction Yellow Arrow Icon"
												src="/svg/right-direction-yellow.svg"
												className="cursor-pointer w-full h-[35px] rotate-[-45deg] object-contain object-center"
											/>
										</div>
									</div>
								</motion.div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
