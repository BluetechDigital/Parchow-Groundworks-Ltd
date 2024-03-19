// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES & BLOGS */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllPreviewFlexibleContentComponents = async (
	id: number,
	postType: string,
	authToken: string,
	loginRedirectURL: string,
	postTypeFlexibleContent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {id: "${id}", status: PUBLISH}) {
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
            									servicesList {
            										title
            										paragraph
            										icon {
            											altText
            											sourceUrl
            											mediaDetails {
            												height
            												width
            											}
            										}
            									}
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
            									backgroundImage {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
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
            									displayBackgroundIcon
            									displayParagraphColor
            									displayBackgroundColor
            								}
											... on ${postTypeFlexibleContent}_Accreditations {
												fieldGroupName
												title
												subtitle
												paragraph
												displaySection
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
			variables: {
				id: id,
			},
			context: {
				headers: {
					authorization: authToken ? `Bearer ${authToken}` : "",
				},
			},
		});

		return {
			content: response?.data?.mainContent?.flexibleContent?.flexibleContent,
		};
	} catch (error) {
		return loginRedirectURL;
	}
};
