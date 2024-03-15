"use client";

// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
	stagger,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useState, FC, Fragment} from "react";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import SideMenu from "../Elements/SideMenu";
import NoticeInfoBanner from "../NoticeInfoBanner";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	// Display all sublinks & Mobile Links
	const [menuActive, setMenuActive] = useState(false);
	const [navBackgroundSublinksOpen, setNavBackgroundSublinksOpen]: any =
		useState(false);
	const [ourServicesSublinksOpen, setOurServicesSublinksOpen]: any =
		useState(false);

	/* Hides or Displays the Full Nav Menu */
	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	/* Display's Navbar background Color
	when Mega sublinks are hover*/
	const displayNavBackgroundColor = () => {
		setNavBackgroundSublinksOpen(!navBackgroundSublinksOpen);
	};

	// Hides or Display Our Services sublinks
	const displayOurServicesSublinks = () => {
		setOurServicesSublinksOpen(!ourServicesSublinksOpen);
	};

	const resetNavbarStyling = () => {
		setNavBackgroundSublinksOpen(false);
		setOurServicesSublinksOpen(false);
	};

	return (
		<>
			<nav className={styles.navbar + ` z-[999] h-fit w-full fixed`}>
				<NoticeInfoBanner />
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="py-2 px-4 bg-primary-default flex items-center justify-between w-auto gap-2 lg:items-baseline"
				>
					<div className=""></div>
					<div className=" flex gap-4">
						<div
							className={
								globalContext?.themesOptionsContent?.email
									? "flex items-center justify-center gap-2"
									: "hidden"
							}
						>
							<div className="hidden md:flex items-center justify-center w-7 h-7 rounded-full bg-accent-two sm:mr-1">
								<svg
									fill="#ffffff"
									className="w-4 h-4"
									viewBox="0 0 100.354 100.354"
									id="Layer_1"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<path d="M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462 c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029 c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02 c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465 c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125 c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011 c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061 c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059 c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018 c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117 c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121 c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071 c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03 c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472 L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481 l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z"></path>
									</g>
								</svg>
							</div>
							<Link
								className="text-sm tracking-wide text-white hover:text-accent-two"
								href={`mailto:${globalContext?.themesOptionsContent?.email}`}
							>
								{globalContext?.themesOptionsContent?.email}
							</Link>
						</div>
						<div
							className={
								globalContext?.themesOptionsContent?.phoneNumber
									? "flex items-center justify-center gap-2"
									: "hidden"
							}
						>
							<div className="hidden md:flex items-center justify-center w-7 h-7 rounded-full bg-accent-two sm:mr-1">
								<svg
									fill="#ffffff"
									viewBox="0 0 32 32"
									version="1.1"
									className="w-4 h-4"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<path d="M8.194 1.156c1.169 1.612 2.563 3.694 4.175 6.237 0.406 0.688 0.344 1.512-0.181 2.481-0.2 0.406-0.706 1.331-1.512 2.787 0.887 1.25 2.238 2.787 4.056 4.6s3.331 3.169 4.538 4.056c1.45-0.85 2.381-1.369 2.788-1.575 0.525-0.281 1.031-0.425 1.512-0.425 0.363 0 0.688 0.081 0.969 0.244 1.856 1.131 3.956 2.525 6.294 4.175 0.444 0.325 0.694 0.769 0.756 1.331 0.063 0.569-0.113 1.169-0.512 1.819-0.2 0.281-0.525 0.694-0.969 1.244-0.444 0.544-1.113 1.231-2 2.056s-1.613 1.244-2.181 1.244h-0.063c-4.269-0.169-9.531-3.369-15.762-9.6-6.237-6.238-9.438-11.494-9.6-15.769 0-0.563 0.412-1.3 1.244-2.212 0.825-0.906 1.506-1.563 2.025-1.969 0.525-0.4 0.969-0.725 1.331-0.969 0.444-0.325 0.95-0.481 1.513-0.481 0.694 0 1.212 0.244 1.581 0.725zM6.194 2.425c-0.85 0.606-1.644 1.287-2.394 2.031-0.744 0.75-1.181 1.3-1.3 1.662 0.163 3.756 3.156 8.537 8.988 14.35s10.625 8.819 14.375 9.019c0.325-0.119 0.856-0.563 1.606-1.331s1.425-1.575 2.025-2.419c0.119-0.163 0.163-0.3 0.119-0.425-2.419-1.694-4.438-3.044-6.056-4.056-0.163 0-0.363 0.063-0.606 0.181-0.363 0.2-1.269 0.706-2.725 1.512l-1.031 0.606-1.031-0.669c-1.331-0.925-2.944-2.363-4.844-4.3-1.894-1.894-3.306-3.512-4.238-4.844l-0.725-0.969 0.606-1.088c0.806-1.45 1.313-2.363 1.512-2.725 0.119-0.244 0.181-0.444 0.181-0.606-1.438-2.294-2.769-4.313-3.981-6.050h-0.063c-0.156 0-0.3 0.044-0.419 0.119z"></path>
									</g>
								</svg>
							</div>
							<Link
								className="text-sm tracking-wide text-white hover:text-accent-two"
								href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
							>
								{globalContext?.themesOptionsContent?.phoneNumber}
							</Link>
						</div>
					</div>
				</motion.div>
				<div className="flex p-0 bg-white">
					<div className="container mx-auto w-full lg:w-[20%] xl:w-[40%] py-0 px-4">
						<Link href="/">
							<Image
								priority
								width={500}
								height={500}
								alt="Parchow Groundworks Ltd Logo"
								src="/img/logos/Parchow-Groundworks-Ltd-logo.png"
								className="object-contain object-center w-[65px] h-[65px]"
							/>
						</Link>
					</div>
					<div className="w-full lg:w-full xl:w-[65%] flex justify-end gap-8 px-4 2xl:gap-12 xl:gap-24">
						<div className="hidden lg:flex items-center justify-end">
							<div className="hidden lg:flex items-center gap-8">
								<ul className="flex lg:items-center">
									{globalContext?.navbarMenuLinks?.length > 0 ? (
										globalContext?.navbarMenuLinks?.map(
											(item: any, keys: number) => (
												<Fragment key={keys}>
													{item?.node?.url === "/services" ? (
														<motion.li
															custom={keys}
															initial={initial}
															whileInView="animate"
															viewport={{once: true}}
															variants={arrayLoopStaggerChildren}
															className="relative group py-0 px-8"
														>
															<div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
																<Link
																	href={`${item?.node?.url}`}
																	target={item?.node?.target}
																	onClick={resetNavbarStyling}
																>
																	<span className="text-black group-hover:text-primary-three text-tiny text-center tracking-[0.05rem]">
																		{item?.node?.label}
																	</span>
																</Link>
																<Image
																	width={550}
																	height={550}
																	alt="Black Arrow Icon"
																	onClick={displayOurServicesSublinks}
																	src="/svg/navigation-menu-dropdown-arrow-black.svg"
																	className={`${
																		ourServicesSublinksOpen
																			? "rotate-180"
																			: "rotate-0"
																	} cursor-pointer w-[22px] h-[22px] object-contain object-center`}
																/>
															</div>
															{ourServicesSublinksOpen ? (
																<>
																	<div
																		onMouseLeave={resetNavbarStyling}
																		onMouseEnter={displayNavBackgroundColor}
																	>
																		<div className="fixed mt-[1.25rem] w-full mx-auto left-0 bg-white flex flex-col items-center justify-center">
																			<ul
																				className={
																					styles.aboutUsSublinks +
																					" px-28 py-6 w-full grid grid-cols-4 gap-4 border-b-8 border-solid border-primary-three z-[999]"
																				}
																			>
																				{globalContext?.servicesSublinks
																					?.length > 0 ? (
																					globalContext?.servicesSublinks?.map(
																						(item: any, keys: number) => (
																							<Fragment key={keys}>
																								<motion.li
																									custom={keys}
																									initial={initial}
																									whileInView="animate"
																									viewport={{once: true}}
																									variants={
																										arrayLoopStaggerChildren
																									}
																								>
																									<Link
																										href={`${item?.node?.url}`}
																										className={` ${
																											ourServicesSublinksOpen
																												? "w-full hover:bg-primary-three text-center text-black hover:text-white"
																												: "text-black"
																										} block p-4 text-tiny`}
																									>
																										{item?.node?.label}
																									</Link>
																								</motion.li>
																							</Fragment>
																						)
																					)
																				) : (
																					<></>
																				)}
																			</ul>
																		</div>
																	</div>
																</>
															) : null}
														</motion.li>
													) : (
														<motion.li
															custom={keys}
															initial={initial}
															whileInView="animate"
															viewport={{once: true}}
															variants={arrayLoopStaggerChildren}
														>
															<Link
																href={`${item?.node?.url}`}
																target={item?.node?.target}
															>
																<span className="py-0 px-4 text-black hover:text-primary-three text-tiny text-center tracking-[0.05rem]">
																	{item?.node?.label}
																</span>
															</Link>
														</motion.li>
													)}
												</Fragment>
											)
										)
									) : (
										<></>
									)}
								</ul>
							</div>
						</div>
					</div>
					<div
						className="w-[5rem] hidden lg:block bg-accent-default"
						style={{clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)"}}
					/>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex flex-col lg:hidden items-center justify-center"
					>
						<button
							type="button"
							onClick={toggleMenu}
							aria-label="toggle menu"
							className={
								menuActive
									? styles.navToggleOpen
									: styles.navToggle +
									  ` ${
											globalContext?.themesOptionsContent?.displayNoticeBanner
												? "top-[62.5px]"
												: "top-[20px]"
									  }`
							}
						>
							<span aria-hidden="true"></span>
						</button>
					</motion.div>
				</div>

				{/* Hidden Tablet & Mobile  Side Menu */}
				<div className={menuActive ? `flex flex-col lg:hidden` : "hidden"}>
					<SideMenu menuActive={menuActive} setMenuActive={setMenuActive} />
				</div>
			</nav>
		</>
	);
};

export default Navbar;
