// Imports
import {
	fadeIn,
	stagger,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IServicesGrid} from "@/types/components/index";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import ServicesGridCard from "./Cards/ServicesGridCard";

const ServicesGrid: FC<IServicesGrid> = ({
	title,
	subtitle,
	paragraph,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ServicesGrid +
					" relative py-8 px-4 bg-white bg-cover bg-no-repeat bg-center"
				}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="lg:container relative m-auto flex flex-col gap-6"
				>
					<div className="flex flex-col lg:flex-row items-center justify-between">
						<div className="flex flex-col">
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-center lg:text-left text-base text-accent-default"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 text-black uppercase leading-[2.25rem] text-center lg:text-left text-lg sm:text-3xl"
							>
								{title}
							</motion.h3>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-full lg:max-w-xl leading-7 text-black text-base text-center lg:text-left"
						/>
					</div>
					<div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 px-0 gap-6 items-start justify-center">
						{servicesGrid?.length > 0 ? (
							servicesGrid.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<>
										<motion.div
											custom={keys}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
											className={styles.card + " group overflow-hidden"}
										>
											<ServicesGridCard
												link={item?.card?.link}
												image={item?.card?.image}
												title={item?.card?.title}
												paragraph={item?.card?.paragraph}
											/>
										</motion.div>
									</>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default ServicesGrid;
