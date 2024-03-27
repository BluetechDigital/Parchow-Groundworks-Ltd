"use client";

// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {IPagination} from "@/types/components/index";

// Components
import Paragraph from "./Paragraph";
import DevelopmentsCard from "../Cards/DevelopmentsCard";
import TestimonialsCard from "../Cards/TestimonialsCard";

const Pagination: FC<IPagination> = ({
	contentType,
	contentArray,
	tailwindStyling,
	numberOfItemsRenderedPerPage,
}) => {
	const itemsPerPage = numberOfItemsRenderedPerPage;
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentContent = contentArray?.slice(startIndex, endIndex);

	const totalPages = Math.ceil(contentArray?.length / itemsPerPage);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const tailwindButtonStyling =
		"relative px-6 py-2 uppercase font-aspektaMain text-white font-semibold cursor-pointer tracking-widest text-tiny w-fit bg-primary-default hover:bg-primary-three transition-all ease-in-out duration-500 before:left-[15%]";

	return (
		<>
			<div className={`${tailwindStyling}`}>
				{currentContent?.length > 0 ? (
					currentContent?.map((item: any, keys: number) => (
						<Fragment key={keys}>
							<motion.div
								custom={keys}
								initial={initial}
								whileInView="animate"
								viewport={{once: true}}
								variants={arrayLoopStaggerChildren}
								className="w-full"
							>
								{contentType === `Gallery` ? (
									<>
										<Image
											alt={item?.altText}
											src={item?.sourceUrl}
											width={item?.mediaDetails?.width}
											height={item?.mediaDetails?.height}
											className={
												item?.sourceUrl
													? `block object-cover object-center w-full h-[150px] ${
															itemsPerPage === 12
																? "md:h-[250px]"
																: "md:h-[250px] xl:h-[205px]"
													  }`
													: `hidden`
											}
										/>
									</>
								) : contentType === `TestimonialsCard` ? (
									<>
										<TestimonialsCard
											name={item?.node?.testimonialReview?.name}
											image={item?.node?.testimonialReview?.image}
											rating={item?.node?.testimonialReview?.rating}
											position={item?.node?.testimonialReview?.position}
											paragraph={item?.node?.testimonialReview?.paragraph}
										/>
									</>
								) : contentType === `DevelopmentsCard` ? (
									<>
										<DevelopmentsCard
											slug={item?.node?.slug}
											date={item?.node?.date}
											title={item?.node?.title}
											excerpt={item?.node?.excerpt}
											featuredImage={item?.node?.featuredImage}
										/>
									</>
								) : (
									<></>
								)}
							</motion.div>
						</Fragment>
					))
				) : (
					<>
						<div
							className="bg-primary-darker"
							style={{
								boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
							}}
						>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex flex-col gap-4 p-10"
							>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-2 text-center text-lg leading-tight tracking-[0.05rem] uppercase font-semibold text-white transition-all ease-in-out duration-200 hover:text-white"
								>
									Oops Sorry!
								</motion.h3>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
								>
									<Paragraph
										content="Nothing to display"
										tailwindStyling="px-0 text-base text-white"
									/>
								</motion.div>
							</motion.div>
						</div>
					</>
				)}
			</div>
			<div>
				{totalPages > 1 && contentArray?.length > 0 ? (
					<>
						<div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 lg:gap-6">
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={handlePrevPage}
								disabled={currentPage === 1}
								className={tailwindButtonStyling}
							>
								<span>Previous</span>
							</motion.button>
							<span className="uppercase font-aspektaMain text-center text-tiny font-semibold leading-tight text-black">
								{`${currentPage} of ${totalPages}`}
							</span>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={handleNextPage}
								disabled={currentPage === totalPages}
								className={tailwindButtonStyling}
							>
								<span>Next</span>
							</motion.button>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default Pagination;
