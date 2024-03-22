// Imports
import {FC} from "react";
import Link from "next/link";
import {IBookAppointment} from "@/types/components";

const BookAppointment: FC<IBookAppointment> = ({link}) => {
	return (
		<>
			<div className="group relative w-fit h-fit hidden lg:block z-[998]">
				<Link href={`${link}`}>
					<div
						className="fixed top-[226px] xl:top-[226px] lg:right-[-127px] xl:right-[-120px] z-20 pr-14 lg:py-4 xl:py-6 px-6 rotate-[90deg] bg-accent-default hover:bg-primary-three flex flex-col justify-center"
						style={{clipPath: "polygon(0% 0, 100% 0%, 90% 100%, 0% 100%)"}}
					>
						<h3 className="tracking-[0.10rem] text-white text-tiny md:text-base text-center uppercase font-aspektaMain">
							Book An Appointment
						</h3>
					</div>
				</Link>
			</div>
		</>
	);
};

export default BookAppointment;
