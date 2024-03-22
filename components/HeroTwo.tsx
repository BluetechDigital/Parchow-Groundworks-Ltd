// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IHeroTwo} from "@/types/components/index";
import {fadeIn, initialTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const HeroTwo: FC<IHeroTwo> = ({title, paragraph, backgroundImage}) => {
	return (
		<>
			<div
				className={
					styles.heroTwo + ` relative z-50 w-full pt-[100px] lg:pt-[110px]`
				}
			>
				<div
					className="py-20 w-full h-[35vh] lg:h-[30vh] flex flex-col items-center lg:items-baseline justify-center relative bg-primary-darker bg-center bg-no-repeat bg-cover"
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
					<div className="max-w-full lg:max-w-2xl mx-auto lg:mx-0 relative z-10 flex flex-col items-center lg:items-start px-6 md:px-24">
						<motion.h1
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="text-center lg:text-left uppercase font-aspektaMain text-lg sm:text-xl xl:text-3xl text-white leading-snug lg:leading-[2.5rem]"
						>
							{title}
						</motion.h1>
						<Paragraph
							content={paragraph}
							tailwindStyling="py-2 text-white leading-[1.5rem] text-base text-center lg:text-left"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroTwo;
