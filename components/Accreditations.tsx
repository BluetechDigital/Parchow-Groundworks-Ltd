// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IAccreditations} from "@/types/components/index";

// Components
import Paragraph from "./Elements/Paragraph";

const Accreditations: FC<IAccreditations> = ({
	title,
	subtitle,
	paragraph,
	imageGrid,
}) => {
	return (
		<>
			<div
				className="py-16 px-4 lg:px-0 bg-white bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `linear-gradient(
								0deg,
								rgb(255, 255, 255, 0.70),
								rgba(255, 255, 255, 0.70),
								rgba(255, 255, 255, 0.70)
							),url("/img/background/Cement-Floor-Background.jpg")`,
				}}
			>
				<div className="container px-0 mx-auto">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col items-center"
					>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-center lg:text-left text-base text-accent-default"
						>
							{subtitle}
						</motion.h4>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-3 max-w-xl mx-auto lg:mx-0 text-black uppercase font-aspektaMain leading-[2.25rem] text-center lg:text-left text-lg sm:text-3xl"
						>
							{title}
						</motion.h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black leading-[1.5rem] text-paragraph text-center"
						/>
					</motion.div>
					<div className="max-w-6xl mx-auto">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={`grid items-center justify-center grid-cols-2 gap-4 ${
								imageGrid?.length <= 4 ? "lg:grid-cols-4" : "lg:grid-cols-6"
							} lg:items-center lg:justify-between py-12`}
						>
							{imageGrid?.length > 0 ? (
								imageGrid.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<motion.div
											custom={keys}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
										>
											<Image
												alt={item?.image?.altText}
												src={item?.image?.sourceUrl}
												width={item?.image?.mediaDetails?.width}
												height={item?.image?.mediaDetails?.height}
												className={
													item?.image?.sourceUrl
														? `block w-[150px] mx-auto h-full sm:w-[150px] lg:w-full lg:h-[125px] object-contain object-center`
														: `hidden`
												}
											/>
										</motion.div>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Accreditations;
