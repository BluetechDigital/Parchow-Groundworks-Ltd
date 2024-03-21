// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IGallery} from "@/types/components";
import fadeInUp, {initial, stagger} from "@/animations/animations";

// Styling
import styles from "../styles/components/Gallery.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import Pagination from "./Elements/Pagination";

const Gallery: FC<IGallery> = ({
	title,
	gallery,
	paragraph,
	itemsDisplayedPerPage,
}) => {
	return (
		<>
			<div
				className={
					styles.gallery +
					` py-12 px-4 bg-white flex flex-col bg-white lg:container mx-auto`
				}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={
						title && paragraph
							? "flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
							: "hidden"
					}
				>
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
						tailwindStyling="max-w-full lg:max-w-xl text-black text-base text-center lg:text-left"
					/>
				</motion.div>
				<Pagination
					contentType="Gallery"
					contentArray={gallery}
					numberOfItemsRenderedPerPage={12}
					tailwindStyling={`${
						gallery?.length > 0
							? `py-6 px-0 grid gap-4 grid-cols-2 ${
									parseInt(itemsDisplayedPerPage) === 12
										? "lg:grid-cols-4"
										: "lg:grid-cols-4 xl:grid-cols-5"
							  }`
							: "flex items-center justify-center"
					}`}
				/>
			</div>
		</>
	);
};

export default Gallery;
