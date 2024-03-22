// Imports
import {
	initial,
	stagger,
	fadeInUp,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IVideoBlock} from "@/types/components";

// Components
import Paragraph from "./Elements/Paragraph";
import VideoWrapper from "./Elements/VideoWrapper";

const VideoBlock: FC<IVideoBlock> = ({
	title,
	video,
	subtitle,
	paragraph,
	buttonLink,
	displayVideo,
	videoBackgroundImage,
}) => {
	return (
		<>
			<div className="py-10 px-4 bg-lightGreyTwo">
				<div className="lg:container mx-auto flex flex-col items-center justify-center gap-4 lg:gap-x-4 xl:gap-x-16">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={
							title && subtitle && paragraph
								? "flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
								: "hidden"
						}
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
								className="my-3 max-w-xl mx-auto lg:mx-0 text-black uppercase font-aspektaMain leading-[2.25rem] text-center lg:text-left text-lg sm:text-3xl"
							>
								{title}
							</motion.h3>
						</div>
						<div className="flex flex-col">
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-full lg:max-w-lg text-black text-base text-center lg:text-left"
							/>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								className={`${buttonLink?.url ? "block" : "hidden"}`}
							>
								<div
									className={`mt-4 lg:mt-2 w-fit mx-auto md:mx-0 py-4 px-6 text-center cursor-pointer bg-primary-default hover:bg-primary-two transition-all ease-in-out duration-500`}
								>
									<h3 className="tracking-[0.10rem] text-white text-tiny md:text-base text-center uppercase font-aspektaMain">
										{buttonLink?.title}
									</h3>
								</div>
							</Link>
						</div>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={`${
							displayVideo ? "h-fit" : "h-[300px] lg:h-[500px]"
						} bg-center bg-no-repeat bg-cover mt-6 lg:mt-12 w-full`}
						style={{
							backgroundImage: `url("${
								displayVideo ? "none" : videoBackgroundImage
							}")`,
						}}
					>
						{displayVideo ? <VideoWrapper>{video}</VideoWrapper> : <></>}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default VideoBlock;
