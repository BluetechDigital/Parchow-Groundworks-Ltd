// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsGrid} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";

const TestimonialsGrid: FC<ITestimonialsGrid> = ({
	title,
	subtitle,
	paragraph,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={
					styles.testimonials +
					` relative py-12 px-4 bg-white bg-cover bg-no-repeat bg-center`
				}
				style={{
					backgroundImage: `linear-gradient(
										0deg,
										rgba(255, 255, 255, 1),
										rgba(255, 255, 255, 0.95),
										rgba(255, 255, 255, 0.85),
										rgba(255, 255, 255, 0.80)
									),url("/svg/background/grid-background-06.svg")`,
				}}
			>
				<div className="lg:container relative m-auto flex flex-col items-center gap-6 sm:gap-12 lg:gap-20">
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

					<Pagination
						contentType="TestimonialsCard"
						numberOfItemsRenderedPerPage={12}
						contentArray={globalContext?.testimonials}
						tailwindStyling={`grid px-4 lg:px-16 lg:-m-4 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}
					/>
				</div>
			</div>
		</>
	);
};

export default TestimonialsGrid;
