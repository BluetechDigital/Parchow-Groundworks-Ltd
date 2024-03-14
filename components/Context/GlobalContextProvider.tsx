// Imports
import {FC} from "react";
import {GlobalContext} from "@/context/global";
import {IGlobalContextProvider} from "@/types/context";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
	globalProps,
}) => {
	return (
		<>
			<GlobalContext.Provider
				value={{
					ourWorks: globalProps?.ourWorks,
					mobileLinks: globalProps?.mobileLinks,
					testimonials: globalProps?.testimonials,
					copyrightLinks: globalProps?.copyrightLinks,
					footerMenuLinks: globalProps?.footerMenuLinks,
					navbarMenuLinks: globalProps?.navbarMenuLinks,
					servicesSublinks: globalProps?.servicesSublinks,
					themesOptionsContent: globalProps?.themesOptionsContent,
				}}
			>
				{children}
			</GlobalContext.Provider>
		</>
	);
};

export default GlobalContextProvider;
