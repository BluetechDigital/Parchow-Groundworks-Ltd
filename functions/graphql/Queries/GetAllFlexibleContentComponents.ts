// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PAGES & BLOGS POSTS*/
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllFlexibleContentComponents = async (
	slug: string,
	postType: string,
	postTypeFlexibleContent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: ${postType}(where: {name: "${slug}", status: PUBLISH}) {
					edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_Hero {
												fieldGroupName
            									title
            									paragraph
            									displaySection
            									buttonLink {
            										url
            										title
            										target
            									}
            									buttonLinkTwo {
            									 	url
            									 	title
            									 	target
            									}
												cardGrid {
            										card {
														text
														buttonLink {
            												url
            												title
            												target
            											}
             											backgroundImage {
             												altText
             												sourceUrl
             												mediaDetails {
             												height
             												width
             												}
             											}
            										}
            									}
											}
											... on ${postTypeFlexibleContent}_HeroTwo {
												fieldGroupName
												title
												paragraph
												displaySection
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												title
												paragraph
												displaySection
												displayParagraph
											}
											... on ${postTypeFlexibleContent}_TitleContentImage {
            									fieldGroupName
            									title
            									textTitle
            									subtitle
            									paragraph
            									image {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
            									buttonLink {
            										url
            										title
            										target
            									}
            									bulletPoints {
            										points
            									}
            									displaySection
            									displayContentOption
            									displayImageClipPath
            									displayParagraphColor
            									displayBackgroundColor
            								}
											... on ${postTypeFlexibleContent}_Accreditations {
												fieldGroupName
												title
												video
												subtitle
												paragraph
												displayVideo
												displaySection
												videoBackgroundImage {
            										sourceUrl
              									}
												imageGrid {
													link {
														url
														title
														target
													}
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_OurServices {
												fieldGroupName
												title
												subtitle
												paragraph
												buttonLink {
            										url
            										title
            										target
            									}
												displaySection
												servicesGrid {
													card {
														title
														paragraph
														link {
															url
															title
															target
														}
														icon {
															altText
															sourceUrl
															mediaDetails {
																height
																width
															}
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_ServicesGrid {
												fieldGroupName
												title
												subtitle
												paragraph
												displaySection
												servicesGrid {
													card {
														title
														paragraph
														link {
															url
															title
															target
														}
														image {
															altText
															sourceUrl
															mediaDetails {
																height
																width
															}
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_ContentSectorGrid {
												fieldGroupName
												title
												subtitle
												paragraph
												displaySection
												sectorGrid {
													card {
														title
														link {
															url
															title
															target
														}
														image {
															altText
															sourceUrl
															mediaDetails {
																height
																width
															}
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_OurServicesGridTwo {
            									fieldGroupName
            									title
												displaySection
            									buttonLink {
            										url
            										title
            										target
            									}
            									servicesGrid {
            									  	card {
            									  		title
            									  		paragraph
            									  		image {
            									  			altText
            									  			sourceUrl
            									  			mediaDetails {
            									  				height
            									  				width
            									  			}
            									  		}
													}
            									}
            								}
											... on ${postTypeFlexibleContent}_SkillsExperiences {
            									fieldGroupName
            									title
            									paragraph
												displaySection
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
            									skillsExperiencesGrid {
            										text
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
            									}
            								}
											... on ${postTypeFlexibleContent}_TeamMembers {
            									fieldGroupName
            									title
            									paragraph
												displaySection
            									teamMembersGrid {
            										card {
            											name
            											position
            											twitterLink
            											linkedinLink
            											facebookLink
            											instagramLink
            											image {
            												altText
            												sourceUrl
            												mediaDetails {
            													height
            													width
            												}
            											}
            										}
            									}
            								}
            								... on ${postTypeFlexibleContent}_ExecutiveLeadershipsTeam {
            									fieldGroupName
            									title
            									paragraph
												displaySection
            									leadershipTeamGrid {
            										card {
            											name
            											position
            											twitterLink
            											linkedinLink
            											facebookLink
            											instagramLink
            											image {
            												altText
            												sourceUrl
            												mediaDetails {
            													height
            													width
            												}
            											}
            										}
            									}
            								}
											... on ${postTypeFlexibleContent}_OurLocation {
												fieldGroupName
												title
												paragraph
												displaySection
											}
											... on ${postTypeFlexibleContent}_DevelopmentsGrid {
												fieldGroupName
												title
												subtitle
												paragraph
												displaySection
											}
											... on ${postTypeFlexibleContent}_VideoBlock {
												fieldGroupName
												title
												video
												subtitle
												paragraph
												displayVideo
												displaySection
												buttonLink {
													url
													title
													target
												}
												videoBackgroundImage {
            										sourceUrl
              									}
											}
											... on ${postTypeFlexibleContent}_Gallery {
												fieldGroupName
												title
												paragraph
												displaySection
												itemsDisplayedPerPage
												gallery {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_GallerySlider {
												fieldGroupName
												displaySection
												gallerySlider {
              										title
              										paragraph
													buttonLink {
                										url
                										title
                										target
                									}
              										backgroundImage {
              											altText
              											sourceUrl
              											mediaDetails {
              												height
              												width
              											}
              										}
													
              									}
											}
											... on ${postTypeFlexibleContent}_TestimonialsSlider {
												fieldGroupName
												displaySection
											}
											... on ${postTypeFlexibleContent}_TestimonialsTwo {
												fieldGroupName
												title
												subtitle
												displaySection
											}
											... on ${postTypeFlexibleContent}_TestimonialsGrid {
												fieldGroupName
												title
												subtitle
												paragraph
												displaySection
											}
											... on ${postTypeFlexibleContent}_Cta {
												fieldGroupName
												title
												paragraph
												displaySection
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
											}
											... on ${postTypeFlexibleContent}_CtaTwo {
												fieldGroupName
												paragraph
												displaySection
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												title
												paragraph
												displaySection
												image {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
											}
											... on ${postTypeFlexibleContent}_RequestAppointmentForm {
												fieldGroupName
												title
												subtitle
												paragraph
												displaySection
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_Maintenance {
												fieldGroupName
												title
												paragraph
												displaySection
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_ErrorPageContent {
												fieldGroupName
												title
												paragraph
												displaySection
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
													sourceUrl
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			content:
				response.data?.mainContent?.edges[0]?.node?.template?.flexibleContent
					?.flexibleContent,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all flexible content components"
		);
	}
};
