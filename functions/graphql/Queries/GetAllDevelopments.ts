import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* DEVELOPMENTS SLUGS (URLS) */
export const getAllDevelopmentsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				developmentsSlugs: developments(where: {status: PUBLISH}, last: 100) {
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

		return response?.data?.developmentsSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the developments slugs"
		);
	}
};

// All Developments Content
export const getAllDevelopmentsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				developmentsContent: developments(
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

		return response?.data?.developmentsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the developments content"
		);
	}
};
