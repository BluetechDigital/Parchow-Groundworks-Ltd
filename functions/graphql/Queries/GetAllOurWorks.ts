import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* OUR WORK SLUGS (URLS) */
export const getAllOurWorksSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				ourWorksSlugs: ourWorks(where: {status: PUBLISH}, last: 100) {
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

		return response?.data?.ourWorksSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch the our works slugs");
	}
};

// All Our Works Content
export const getAllOurWorksContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				ourWorksContent: ourWorks(
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

		return response?.data?.ourWorksContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the our works content"
		);
	}
};
