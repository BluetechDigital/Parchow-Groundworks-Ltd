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
            									subtitle
            									paragraph
            									textTitle
												bulletPoints {
              										point
              									}
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
            									displaySection
            									displayContentOption
            									displayBackgroundIcon
            									displayBackgroundColor
            								}
											... on ${postTypeFlexibleContent}_OurClients {
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
            									}
            								}
											... on ${postTypeFlexibleContent}_OurLocation {
												fieldGroupName
												title
												paragraph
												displaySection
											}
											... on ${postTypeFlexibleContent}_GettingStarted {
            									fieldGroupName
            									title
												subtitle
												displaySection
            									stepOne {
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
            									stepTwo {
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
            									stepThree {
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
											... on ${postTypeFlexibleContent}_OurWorksGrid {
												fieldGroupName
												title
												subtitle
												paragraph
												displaySection
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
													sourceUrl
												}
											}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												title
												paragraph
												displaySection
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
