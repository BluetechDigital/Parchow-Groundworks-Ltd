// Imports
import {render} from "@react-email/components";
import {emailTransporter} from "@/config/nodemailer";
import type {NextApiRequest, NextApiResponse} from "next";
import {IBusinessEmail, ICustomerEmail} from "@/types/email";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";

// Components
import CustomerInquiryConfirmationEmail from "@/components/Emails/CustomerInquiryConfirmationEmail";
import BusinessCustomerInquiryConfirmationEmail from "@/components/Emails/BusinessCustomerInquiryConfirmationEmail";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const data = req.body;

		// If any of these values are undefined
		if (
			!data?.email ||
			!data?.message ||
			!data?.subject ||
			!data?.lastName ||
			!data?.firstName ||
			!data?.phoneNumber ||
			!data?.selectedServices
		) {
			return res.status(400).json({
				status: "error",
				message: "Bad request. Please try again.",
			});
		}

		try {
			const imagesDirUrl: any = process.env.IMAGE_DIR_URL;
			const themesOptionsContent: any = await getThemesOptionsContent();

			/* Render React Customer Inquiry 
			Confirmation Email Component*/
			const customerEmailHtml: string = render(
				<CustomerInquiryConfirmationEmail
					email={`${data?.email}`}
					imagesDirUrl={imagesDirUrl}
					subject={`${data?.subject}`}
					lastName={`${data?.lastName}`}
					phoneNumber={data?.phoneNumber}
					firstName={`${data?.firstName}`}
					themesOptionsContent={themesOptionsContent}
					selectedServices={`${data?.selectedServices}`}
				/>
			);

			/* Render React Business Customer 
			Inquiry Confirmation Email Component*/
			const businessEmailHtml: string = render(
				<BusinessCustomerInquiryConfirmationEmail
					email={`${data?.email}`}
					imagesDirUrl={imagesDirUrl}
					subject={`${data?.subject}`}
					message={`${data?.message}`}
					lastName={`${data?.lastName}`}
					phoneNumber={data?.phoneNumber}
					firstName={`${data?.firstName}`}
					themesOptionsContent={themesOptionsContent}
					selectedServices={`${data?.selectedServices}`}
				/>
			);

			/* Customer Inquiry Confirmation Email */
			const customerEmail: ICustomerEmail = {
				from: `${themesOptionsContent?.email}`,
				to: `${data?.email}`,
				subject: `Thank You for Contacting Parchow Groundworks Ltd`,
				html: customerEmailHtml,
			};

			/* Business Customer Inquiry Confirmation Email */
			const businessEmail: IBusinessEmail = {
				from: `${themesOptionsContent?.email}`,
				to: `${themesOptionsContent?.email}`,
				subject: `New Website Inquiry: ${data?.subject}`,
				html: businessEmailHtml,
			};

			await emailTransporter.sendMail({...customerEmail});
			await emailTransporter.sendMail({...businessEmail});

			return res.status(200).json({
				status: "success",
				message:
					"Thanks for your message! We'll endeavour to get back in touch with you as soon as possible.",
			});
		} catch (err) {
			console.log(err);

			return res.status(400).json({
				status: "error",
				message: "Something went wrong sending your Inquiry. Please try again.",
				data: err,
			});
		}
	}

	return res.status(400).json({
		status: "error",
		message: "Bad request. Please try again.",
	});
};

export default handler;
