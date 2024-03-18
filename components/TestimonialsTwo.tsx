// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsTwo} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import TestimonialsTwoCard from "./Cards/TestimonialsTwoCard";

const TestimonialsTwo: FC<ITestimonialsTwo> = ({title, subtitle}) => {
	const globalContext = useGlobalContext();
	return (
		<>
			<div
				className={
					styles.testimonials +
					` py-16 px-4 bg-white bg-cover bg-no-repeat bg-center`
				}
				style={{
					backgroundImage: `linear-gradient(
									0deg,
									rgba(255, 255, 255, 1),
									rgba(255, 255, 255, 0.95),
									rgba(255, 255, 255, 0.85),
									rgba(255, 255, 255, 0.80)
								),url("/svg/background/grid-background-12.svg")`,
				}}
			>
				<div className="lg:container m-auto px-0">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={title && subtitle ? "block py-4" : "hidden"}
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
							className="my-3 max-w-lg mx-auto lg:mx-0 text-black text-center lg:text-left font-semibold text-lg sm:text-3xl"
						>
							{title}
						</motion.h3>
					</motion.div>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-center gap-4"
					>
						{globalContext?.testimonials?.length > 0 ? (
							globalContext?.testimonials
								?.slice(0, 3)
								?.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<TestimonialsTwoCard
											name={item?.node?.testimonialReview?.name}
											image={item?.node?.testimonialReview?.image}
											rating={item?.node?.testimonialReview?.rating}
											position={item?.node?.testimonialReview?.position}
											paragraph={item?.node?.testimonialReview?.paragraph}
										/>
									</Fragment>
								))
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TestimonialsTwo;
