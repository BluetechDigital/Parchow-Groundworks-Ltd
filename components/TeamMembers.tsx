// Imports
import {
	stagger,
	initial,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ITeamMembers} from "@/types/components/index";

// Components
import Paragraph from "./Elements/Paragraph";
import TeamMembersCard from "./Cards/TeamMembersCard";

const TeamMembers: FC<ITeamMembers> = ({title, paragraph, teamMembersGrid}) => {
	return (
		<>
			<div
				className="py-12 px-4 bg-white bg-center bg-no-repeat bg-cover"
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
				<div className="lg:container m-auto flex flex-col items-center gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
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
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 px-0 gap-6 w-full">
						{teamMembersGrid?.length > 0 ? (
							teamMembersGrid?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<TeamMembersCard
											name={item?.card?.name}
											image={item?.card?.image}
											position={item?.card?.position}
											twitterLink={item?.card?.twitterLink}
											facebookLink={item?.card?.facebookLink}
											linkedinLink={item?.card?.linkedinLink}
											instagramLink={item?.card?.instagramLink}
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

export default TeamMembers;
