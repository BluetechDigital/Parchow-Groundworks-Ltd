// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {IBookAppointment} from "@/types/components";

const BookAppointment: FC<IBookAppointment> = ({link}) => {
	return (
		<>
			<div className="group relative w-fit h-fit hidden lg:block z-[998]">
				<Link href={`${link}`}>
					<div
						className="fixed top-[220px] right-[-112px] z-20 pr-14 p-6 rotate-[90deg] bg-accent-default hover:bg-primary-three flex flex-col justify-center"
						style={{clipPath: "polygon(0% 0, 100% 0%, 90% 100%, 0% 100%)"}}
					>
						<h3 className="text-white uppercase tracking-[0.05rem] font-normal">
							Book An Appointment
						</h3>
					</div>
				</Link>
			</div>
		</>
	);
};

export default BookAppointment;
