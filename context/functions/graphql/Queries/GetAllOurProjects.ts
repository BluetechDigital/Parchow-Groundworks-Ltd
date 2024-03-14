import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* OUR PROJECTS SLUGS (URLS) */
export const getAllOurWorksSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				OurWorksSlugs: OurWorks(where: {status: PUBLISH}, last: 100) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.OurWorksSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the our projects slugs"
		);
	}
};

// All Our Projects Content
export const getAllOurWorksContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				OurWorksContent: OurWorks(
					where: {status: PUBLISH, orderby: {field: DATE, order: DESC}}
					first: 100
				) {
					edges {
						node {
							slug
							date
							excerpt
							title(format: RENDERED)
							featuredImage {
								node {
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
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.OurWorksContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the our projects content"
		);
	}
};
