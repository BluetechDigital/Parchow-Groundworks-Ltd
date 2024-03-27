// Imports
import {
	Head,
	Html,
	Link,
	Text,
	Body,
	Section,
	Preview,
	Container,
} from "@react-email/components";
import * as React from "react";
import {IBusinessEmail} from "@/types/email";

// Components
import EmailFooter from "./Layout/EmailFooter";
import EmailHeader from "./Layout/EmailHeader";

export const BusinessCustomerInquiryConfirmationEmail: React.FC<
	IBusinessEmail.IBusinessConfirmationEmail
> = ({
	email,
	subject,
	message,
	lastName,
	firstName,
	updatedDate,
	phoneNumber,
	imagesDirUrl,
	selectedServices,
	themesOptionsContent,
}) => {
	const formattedDate = new Intl.DateTimeFormat("en", {
		dateStyle: "medium",
		timeStyle: "medium",
	}).format(updatedDate);

	return (
		<Html>
			<Head />
			<Preview>New Website Inquiry: {`${selectedServices}`}</Preview>
			<Body style={main}>
				<Container style={container}>
					<EmailHeader
						imagesDirUrl={`${imagesDirUrl}/Parchow-Groundworks-Ltd-Email-Header-Business.png`}
					/>
					<Section style={content}>
						<Text style={introParagraph}>Hello Team,</Text>
						<Text style={paragraph}>
							We&apos;ve just received a new appointment request regarding,
							&quot;{subject}&quot; and our general services. The customer as
							contacted us on {formattedDate} their details are below.
						</Text>
						<Text style={detailsParagraph}>Inquiry Details:</Text>
						<Text style={paragraph}>
							<strong>First Name:</strong> {firstName}
							<br />
							<strong>Last Name:</strong> {lastName}
							<br />
							<strong>Email:</strong>{" "}
							<Link href={`mailto:${email}`} style={link}>
								{email}
							</Link>
							<br />
							<strong>Phone Number:</strong>{" "}
							<Link href={`tel:${phoneNumber}`} style={link}>
								{phoneNumber}
							</Link>
							<br />
							<strong>Services Inquired:</strong> {selectedServices} Services
						</Text>
						<Text style={paragraph}>
							<strong>Subject:</strong> {subject}
							<br />
							<strong>Message:</strong> &quot;{message}&quot;
						</Text>
						<Text style={paragraph}>
							Can we begin reviewing the details of {firstName}&apos;s inquiry
							shortly and promptly follow up! If we require any additional
							information can we get in contact with {firstName}. Thanks Team!
						</Text>
						<Text style={paragraph}>Best regards,</Text>
						<Text style={paragraph}>
							Andy Howe,
							<br />
							Director,
							<br />
							Parchow Groundworks Ltd
						</Text>
					</Section>
					<EmailFooter
						imagesDirUrl={imagesDirUrl}
						themesOptionsContent={themesOptionsContent}
					/>
				</Container>
			</Body>
		</Html>
	);
};

export default BusinessCustomerInquiryConfirmationEmail;

const fontFamily: string = "PlusJakartaSans,Helvetica,Arial,sans-serif";

const main: IBusinessEmail.IMain = {
	fontFamily,
	padding: "0px",
	backgroundColor: "#ffffff",
};
const introParagraph: IBusinessEmail.IIntroParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "600",
	padding: "0.25rem 0.5rem",

	paddingTop: "1.5rem",
};
const detailsParagraph: IBusinessEmail.IDetailsParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "600",
	padding: "0.25rem 0.5rem",
};
const paragraph: IBusinessEmail.IParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "400",
	padding: "0.25rem 0.5rem",
};
const container: IBusinessEmail.IContainer = {
	maxWidth: "580px",
	margin: "0px auto",
	marginBottom: "0px",
	backgroundColor: "#ffffff",
};
const content: IBusinessEmail.IContent = {
	padding: "10px",
};
const link: IBusinessEmail.ILink = {
	color: "#1414dc",
	textDecoration: "underline",
};