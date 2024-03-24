// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHeroCard} from "@/types/components/index";
import {initial, fadeInUp} from "@/animations/animations";

const HeroCard: FC<IHeroCard> = ({text, buttonLink, backgroundImage}) => {
	return (
		<>
			<Link
				href={`${buttonLink?.url}`}
				target={buttonLink?.target}
				className=" bg-white transform lg:hover:scale-105 transition-all ease-in-out duration-500"
			>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="bg-primary-darker group-hover:bg-primary-darker relative px-4 py-6 w-full lg:py-12 h-[350px] md:h-[450px] xl:h-[650px] bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage: `url("${backgroundImage?.sourceUrl}")`,
					}}
				>
					<div className="absolute -top-[-50px] left-0 w-fit py-2 px-4 bg-lightGreyTwo hover:bg-lightGrey">
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-left text-primary-default uppercase font-aspektaMain text-paragraph"
						>
							{text}
						</motion.h3>
					</div>
					<div
						className={
							buttonLink?.url ? "absolute -bottom-0 right-0" : "hidden"
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
		</>
	);
};

export default HeroCard;
