import { Tabs as SwitchTabs } from "@base-ui/react/tabs"
import { useContext } from "react"
import { cn } from "@/utils/cn"
import { type TabsIndicatorProps, TabsOrientationContext } from "./tabs.types"

export const TabsIndicator = ({ className, ...props }: TabsIndicatorProps) => {
	const orientation = useContext(TabsOrientationContext)
	if (orientation === "horizontal") {
		return (
			<SwitchTabs.Indicator
				className={cn(
					"absolute top-0 left-1/2 z-[-1] h-11 w-(--active-tab-width) -translate-x-1/2 translate-y-(--active-tab-top) rounded-2xl bg-surface-brand-primary-default transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] md:h-12 md:rounded-full",
					className,
				)}
				{...props}
			/>
		)
	}

	return (
		<SwitchTabs.Indicator
			className={cn(
				"absolute top-1/2 left-0 z-[-1] h-11 w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-1/2 rounded-full bg-surface-brand-primary-default transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] md:h-12",
				className,
			)}
			{...props}
		/>
	)
}
