// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import HeroCard from "./Cards/HeroCard";
import Paragraph from "./Elements/Paragraph";

const Hero: FC<IHero> = ({
	title,
	cardGrid,
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
								className={`${buttonLink?.url ? "block w-fit" : "hidden"}`}
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
								className={`${buttonLinkTwo?.url ? "block w-fit" : "hidden"}`}
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
						{cardGrid?.length > 0 ? (
							cardGrid?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="w-full flex flex-col overflow-hidden"
									>
										<HeroCard
											text={item?.card?.text}
											buttonLink={item?.card?.buttonLink}
											backgroundImage={item?.card?.backgroundImage}
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
