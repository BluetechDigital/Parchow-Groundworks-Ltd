// Components
export type ICTA = {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IHero = {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	cardGrid: [
		{
			card: {
				text: string;
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
				backgroundImage: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};
export type ICTATwo = {
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IHeroTwo = {
	title: string;
	paragraph: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IGallery = {
	title: string;
	paragraph: string;
	itemsDisplayedPerPage: string;
	gallery: [
		{
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		}
	];
};
export type INewsletter = {
	paragraph: string;
};
export type IVideoBlock = {
	title: string;
	video: string;
	subtitle: string;
	paragraph: string;
	displayVideo: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	videoBackgroundImage: {
		sourceUrl: string;
	};
};
export type IOurServices = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	servicesGrid: [
		{
			card: {
				title: string;
				paragraph: string;
				link: {
					url: string;
					title: string;
					target: string;
				};
				icon: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};
export type ITeamMembers = {
	title: string;
	paragraph: string;
	teamMembersGrid: [
		{
			card: {
				name: string;
				position: string;
				facebookLink: string;
				twitterLink: string;
				linkedinLink: string;
				instagramLink: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};
export type IOurLocation = {
	title: string;
	paragraph: string;
};
export type IContactForm = {
	title: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IMaintenance = {
	title: string;
	paragraph: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IServicesGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
	servicesGrid: [
		{
			card: {
				title: string;
				paragraph: string;
				link: {
					url: string;
					title: string;
					target: string;
				};
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};
export type IGallerySlider = {
	gallerySlider: [
		{
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type IAccreditations = {
	title: string;
	video: string;
	subtitle: string;
	paragraph: string;
	displayVideo: boolean;
	videoBackgroundImage: {
		sourceUrl: string;
	};
	imageGrid: [
		{
			link: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
	displayParagraph: boolean;
};
export type ITestimonialsTwo = {
	title: string;
	subtitle: string;
};
export type IDevelopmentsGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
};
export type ITestimonialsGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
};
export type ITitleContentImage = {
	title: string;
	subtitle: string;
	paragraph: string;
	textTitle: string;
	displayContentOption: string;
	displayParagraphColor: string;
	displayBackgroundColor: string;
	displayImageClipPath: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
	bulletPoints: [
		{
			points: string;
		}
	];
};
export type ISkillsExperiences = {
	title: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
	skillsExperiencesGrid: [
		{
			text: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type IContentSectorGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
	sectorGrid: [
		{
			card: {
				title: string;
				link: {
					url: string;
					title: string;
					target: string;
				};
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};
export type IOurServicesGridTwo = {
	title: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	servicesGrid: [
		{
			card: {
				title: string;
				paragraph: string;

				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};
export type IRequestAppointmentForm = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IExecutiveLeadershipsTeam = {
	title: string;
	paragraph: string;
	leadershipTeamGrid: [
		{
			card: {
				name: string;
				position: string;
				facebookLink: string;
				twitterLink: string;
				linkedinLink: string;
				instagramLink: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};

// Global
export type ILayout = {
	children: React.ReactNode;
};
export type IErrorPage = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IPagination = {
	contentArray: any;
	contentType: string;
	tailwindStyling: string;
	numberOfItemsRenderedPerPage: number;
};

// Cards
export type IHeroCard = {
	text: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type ITeamMembersCard = {
	name: string;
	position: string;
	facebookLink: string;
	twitterLink: string;
	linkedinLink: string;
	instagramLink: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IDevelopmentsCard = {
	slug: string;
	date: string;
	title: string;
	excerpt: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type IOurServicesCard = {
	title: string;
	paragraph: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
	icon: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IServicesGridCard = {
	title: string;
	paragraph: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type ITestimonialsCard = {
	name: string;
	rating: number;
	position: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IOurServicesCardTwo = {
	title: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IContentSectorGridCard = {
	title: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type ITitleContentImageCard = {
	title: string;
	subtitle: string;
	paragraph: string;
	textTitle: string;
	paragraphColor: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	bulletPoints: [
		{
			points: string;
		}
	];
};
export type IExecutiveLeadershipsTeamCard = {
	name: string;
	position: string;
	facebookLink: string;
	twitterLink: string;
	linkedinLink: string;
	instagramLink: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};

// Elements
export type ITitle = {
	content: string;
	tailwindStyling: string;
};
export type ISideMenu = {
	menuActive: boolean;
	setMenuActive: any;
};
export type IParagraph = {
	content: string;
	tailwindStyling: string;
};
export type IRenderStars = {
	rating: number;
};
export type IVideoWrapper = {
	children: React.ReactNode;
};
export type IYoutubeButton = {
	title: string;
	fullWidth: boolean;
	displayYoutubeIcon: boolean;
};
export type IBackHoverButton = {
	link: string;
};
export type IBookAppointment = {
	link: string;
};
