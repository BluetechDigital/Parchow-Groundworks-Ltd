// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ISkillsExperiences} from "@/types/components/index";

// Components
import Paragraph from "./Elements/Paragraph";

const SkillsExperiences: FC<ISkillsExperiences> = ({
	title,
	image,
	paragraph,
	skillsExperiencesGrid,
}) => {
	return (
		<>
			<section className="relative overflow-hidden py-8 px-4 ">
				<div className="container px-0 mx-auto">
					<div className="flex flex-wrap border-b border-primary-dark my-4">
						<div className="w-full lg:w-1/2 p-4">
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 uppercase text-black text-center lg:text-left font-semibold text-lg lg:text-xl"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-full lg:max-w-xl leading-7 text-black text-base text-center lg:text-left"
							/>
						</div>
						<div className="w-full lg:w-1/2 p-4">
							<Image
								alt={image?.altText}
								src={image?.sourceUrl}
								width={image?.mediaDetails.width}
								height={image?.mediaDetails.height}
								className={`${
									image?.sourceUrl
										? "mx-auto xl:mx-0 px-16 lg:px-28 w-full h-[150px] lg:h-[200px] object-contain object-center"
										: "hidden"
								}`}
							/>
						</div>
					</div>
					<div className="p-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-y-6 gap-4 items-center justify-center">
						{skillsExperiencesGrid?.length > 0 ? (
							skillsExperiencesGrid?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="flex flex-col items-center justify-center h-fit"
									>
										<Image
											alt={item?.image?.altText}
											src={item?.image?.sourceUrl}
											width={item?.image?.mediaDetails.width}
											height={item?.image?.mediaDetails.height}
											className={`${
												item?.image?.sourceUrl
													? "bg-lightGreyTwo mx-auto rounded-full w-32 h-32 mb-6 object-cover object-center"
													: "hidden"
											}`}
										/>
										<Paragraph
											content={item?.text}
											tailwindStyling="text-black text-tiny xl:text-tiny text-left"
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default SkillsExperiences;
