// Imports
import {FC} from "react";
import {usePageContext} from "@/context/pages";
import {IPostTypeFlexibleContent} from "@/types/context";

// Components
import CTA from "../CTA";
import Hero from "../Hero";
import CTATwo from "../CTATwo";
import HeroTwo from "../HeroTwo";
import Gallery from "../Gallery";
import Accreditations from "../Accreditations";
import VideoBlock from "../VideoBlock";
import TeamMembers from "../TeamMembers";
import OurServices from "../OurServices";
import ContactForm from "../ContactForm";
import OurLocation from "../OurLocation";
import ServicesGrid from "../ServicesGrid";
import ErrorPage from "../Global/ErrorPage";
import GallerySlider from "../GallerySlider";
import GettingStarted from "../GettingStarted";
import TitleParagraph from "../TitleParagraph";
import Maintenance from "../Global/Maintenance";
import TestimonialsTwo from "../TestimonialsTwo";
import DevelopmentsGrid from "../DevelopmentsGrid";
import TestimonialsGrid from "../TestimonialsGrid";
import TitleContentImage from "../TitleContentImage";
import SkillsExperiences from "../SkillsExperiences";
import ContentSectorGrid from "../ContentSectorGrid";
import TestimonialsSlider from "../TestimonialsSlider";
import OurServicesGridTwo from "../OurServicesGridTwo";
import RequestAppointmentForm from "../RequestAppointmentForm";
import ExecutiveLeadershipsTeam from "../ExecutiveLeadershipsTeam";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: IPostTypeFlexibleContent =
		content?.postTypeFlexibleContent;

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, keys: number) => (
					<section key={keys}>
						{item?.fieldGroupName === `${FlexibleContent}_Hero` &&
						item?.displaySection ? (
							<>
								<Hero
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									servicesList={item?.servicesList}
									buttonLinkTwo={item?.buttonLinkTwo}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_HeroTwo` &&
						  item?.displaySection ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TitleParagraph` &&
						  item?.displaySection ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
									displayParagraph={item?.displayParagraph}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_TitleContentImage` &&
						  item?.displaySection ? (
							<>
								<TitleContentImage
									title={item?.title}
									image={item?.image}
									subtitle={item?.subtitle}
									textTitle={item?.textTitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									bulletPoints={item?.bulletPoints}
									displayContentOption={item?.displayContentOption}
									displayParagraphColor={item?.displayParagraphColor}
									displayBackgroundIcon={item?.displayBackgroundIcon}
									displayBackgroundColor={item?.displayBackgroundColor}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Accreditations` &&
						  item?.displaySection ? (
							<>
								<Accreditations
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									imageGrid={item?.imageGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurServices` &&
						  item?.displaySection ? (
							<>
								<OurServices
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									servicesGrid={item?.servicesGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ServicesGrid` &&
						  item?.displaySection ? (
							<>
								<ServicesGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									servicesGrid={item?.servicesGrid}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_ContentSectorGrid` &&
						  item?.displaySection ? (
							<>
								<ContentSectorGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									sectorGrid={item?.sectorGrid}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_OurServicesGridTwo` &&
						  item?.displaySection ? (
							<>
								<OurServicesGridTwo
									title={item?.title}
									buttonLink={item?.buttonLink}
									servicesGrid={item?.servicesGrid}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_SkillsExperiences` &&
						  item?.displaySection ? (
							<>
								<SkillsExperiences
									title={item?.title}
									image={item?.image}
									paragraph={item?.paragraph}
									skillsExperiencesGrid={item?.skillsExperiencesGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TeamMembers` &&
						  item?.displaySection ? (
							<>
								<TeamMembers
									title={item?.title}
									paragraph={item?.paragraph}
									teamMembersGrid={item?.teamMembersGrid}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_ExecutiveLeadershipsTeam` &&
						  item?.displaySection ? (
							<>
								<ExecutiveLeadershipsTeam
									title={item?.title}
									paragraph={item?.paragraph}
									leadershipTeamGrid={item?.leadershipTeamGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurLocation` &&
						  item?.displaySection ? (
							<>
								<OurLocation title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_GettingStarted` &&
						  item?.displaySection ? (
							<>
								<GettingStarted
									title={item?.title}
									subtitle={item?.subtitle}
									stepOne={item?.stepOne}
									stepTwo={item?.stepTwo}
									stepThree={item?.stepThree}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_DevelopmentsGrid` &&
						  item?.displaySection ? (
							<>
								<DevelopmentsGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_VideoBlock` &&
						  item?.displaySection ? (
							<>
								<VideoBlock
									title={item?.title}
									video={item?.video}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									displayVideo={item?.displayVideo}
									videoBackgroundImage={item?.videoBackgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Gallery` &&
						  item?.displaySection ? (
							<>
								<Gallery
									title={item?.title}
									gallery={item?.gallery}
									paragraph={item?.paragraph}
									itemsDisplayedPerPage={item?.itemsDisplayedPerPage}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_GallerySlider` &&
						  item?.displaySection ? (
							<>
								<GallerySlider gallerySlider={item?.gallerySlider} />
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_TestimonialsSlider` &&
						  item?.displaySection ? (
							<>
								<TestimonialsSlider />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TestimonialsTwo` &&
						  item?.displaySection ? (
							<>
								<TestimonialsTwo
									title={item?.title}
									subtitle={item?.subtitle}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_TestimonialsGrid` &&
						  item?.displaySection ? (
							<>
								<TestimonialsGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Cta` &&
						  item?.displaySection ? (
							<>
								<CTA
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_CTATwo` &&
						  item?.displaySection ? (
							<>
								<CTATwo
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactForm` &&
						  item?.displaySection ? (
							<>
								<ContactForm title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_RequestAppointmentForm` &&
						  item?.displaySection ? (
							<>
								<RequestAppointmentForm
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Maintenance` &&
						  item?.displaySection ? (
							<>
								<Maintenance
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName ===
								`${FlexibleContent}_ErrorPageContent` &&
						  item?.displaySection ? (
							<>
								<ErrorPage
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : (
							<></>
						)}
					</section>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
