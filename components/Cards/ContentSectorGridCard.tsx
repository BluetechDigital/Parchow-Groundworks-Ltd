// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IContentSectorGridCard} from "@/types/components";
import {initial, fadeInUp} from "@/animations/animations";

// Styling
import styles from "../../styles/components/OurServices.module.scss";

const ContentSectorGridCard: FC<IContentSectorGridCard> = ({
	link,
	image,
	title,
}) => {
	return (
		<>
			<div className="flex flex-col">
				<Link
					href={`${link?.url}`}
					target={link?.target}
					className={styles.card + " group overflow-hidden bg-white"}
				>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="bg-primary-darker group-hover:bg-primary-darker relative px-4 py-6 w-full lg:py-12 h-[350px] bg-center bg-no-repeat bg-cover"
						style={{
							backgroundImage: `url("${image?.sourceUrl}")`,
						}}
					>
						<div
							className={link?.url ? "absolute -bottom-0 right-0" : "hidden"}
						>
							<div className="w-fit p-2 bg-lightGreyTwo hover:bg-lightGrey">
								{link?.title}
								<Image
									width={550}
									height={550}
									alt="Right Direction Yellow Arrow Icon"
									src="/svg/right-direction-yellow.svg"
									className="cursor-pointer w-full h-[35px] rotate-[-45deg] object-contain object-center"
								/>
							</div>
						</div>
					</motion.div>
				</Link>
				<div className="px-4 py-6">
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-center text-black uppercase font-aspektaMain text-paragraph my-3 font-semibold"
					>
						{title}
					</motion.h3>
				</div>
			</div>
		</>
	);
};

export default ContentSectorGridCard;
