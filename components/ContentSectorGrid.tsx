// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IContentSectorGrid} from "@/types/components/index";

// Components
import Paragraph from "./Elements/Paragraph";
import ContentSectorGridCard from "./Cards/ContentSectorGridCard";

const ContentSectorGrid: FC<IContentSectorGrid> = ({
	title,
	subtitle,
	paragraph,
	sectorGrid,
}) => {
	return (
		<>
			<div
				className="py-12 px-4 bg-white bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `linear-gradient(
								0deg,
								rgb(255, 255, 255, 0.90),
								rgba(255, 255, 255, 0.90),
								rgba(255, 255, 255, 0.90)
							),url("/svg/background/grid-background-06.svg")`,
				}}
			>
				<div className="lg:container m-auto flex flex-col items-center gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
					>
						<div>
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
								className="my-3 max-w-xl mx-auto lg:mx-0 text-primary-default uppercase font-aspektaMain leading-[2.25rem] text-center lg:text-left text-lg sm:text-3xl"
							>
								{title}
							</motion.h3>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-full lg:max-w-xl text-black text-base text-center lg:text-left"
						/>
					</motion.div>
					<div className="grid grid-cols-1 lg:grid-cols-3 py-6 px-0 gap-6 w-full">
						{sectorGrid?.length > 0 ? (
							sectorGrid?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<ContentSectorGridCard
											link={item?.card?.link}
											image={item?.card?.image}
											title={item?.card?.title}
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

export default ContentSectorGrid;
