// Imports
import {
	initial,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
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
			<div
				className="relative overflow-hidden py-8 px-4 bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `linear-gradient(
								0deg,
								rgb(255, 255, 255, 0.70),
								rgba(255, 255, 255, 0.70),
								rgba(255, 255, 255, 0.70)
							),url("/img/background/Cement-Floor-Background.jpg")`,
				}}
			>
				<div className="lg:container px-0 mx-auto">
					<div className="flex flex-wrap border-b border-accent-default my-4">
						<div className="w-full lg:w-1/2 p-4">
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
					<div className="p-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-y-6 gap-4 items-center justify-center">
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
											className={
												item?.image?.sourceUrl
													? "bg-lightGreyTwo mx-auto w-full h-32 mb-6 object-cover object-center"
													: "hidden"
											}
											alt={item?.image?.altText}
											src={item?.image?.sourceUrl}
											width={item?.image?.mediaDetails?.width}
											height={item?.image?.mediaDetails?.height}
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
			</div>
		</>
	);
};

export default SkillsExperiences;
