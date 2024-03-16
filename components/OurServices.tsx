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
import {IOurServices} from "@/types/components/index";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import OurServicesCard from "./Cards/OurServicesCard";

const OurServices: FC<IOurServices> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
	servicesGrid,
}) => {
	return (
		<>
			<div className={styles.ourServices + " py-12 px-4 bg-primary-darker"}>
				<div className="container m-auto flex flex-col items-center gap-12 lg:gap-6 lg:gap-8">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
					>
						<div className="w-full lg:w-[25%]">
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
								className="my-3 max-w-lg mx-auto lg:mx-0 text-white text-center lg:text-left font-semibold text-lg sm:text-3xl"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-full lg:max-w-lg text-white text-base text-center lg:text-left"
							/>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								className={`${buttonLink?.url ? "block mt-4" : "hidden"}`}
							>
								<div
									className={`py-4 px-6 text-center cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500`}
								>
									<h3 className="tracking-[0.10rem] text-white text-base text-center">
										{buttonLink?.title}
									</h3>
								</div>
							</Link>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 w-full lg:w-[66%]">
							{servicesGrid?.length > 0 ? (
								servicesGrid?.slice(0, 2)?.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<motion.div
											custom={keys}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
										>
											<OurServicesCard
												link={item?.card?.link}
												icon={item?.card?.icon}
												title={item?.card?.title}
												paragraph={item?.card?.paragraph}
											/>
										</motion.div>
									</Fragment>
								))
							) : (
								<></>
							)}
						</div>
					</motion.div>
					<div className="grid grid-cols-1 lg:grid-cols-3 p-0 gap-12 lg:gap-6 w-full">
						{servicesGrid?.length > 0 ? (
							servicesGrid?.slice(2)?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<OurServicesCard
											link={item?.card?.link}
											icon={item?.card?.icon}
											title={item?.card?.title}
											paragraph={item?.card?.paragraph}
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

export default OurServices;
