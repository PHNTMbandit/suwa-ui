import { Tabs as SwitchTabs } from "@base-ui/react/tabs"
import { useContext } from "react"
import { cn } from "@/utils/cn"
import { type TabsListProps, TabsOrientationContext } from "./tabs.types"

export const TabsList = ({ className, ...props }: TabsListProps) => {
	const orientation = useContext(TabsOrientationContext)

	if (orientation === "horizontal") {
		return (
			<SwitchTabs.List
				className={cn(
					"relative z-0 flex h-fit grow flex-col gap-2 rounded-3xl bg-surface-neutral-primary-default p-2",
					className,
				)}
				{...props}
			/>
		)
	}

	return (
		<SwitchTabs.List
			className={cn(
				"relative z-0 flex gap-1 rounded-full bg-surface-neutral-primary-default p-2",
				className,
			)}
			{...props}
		/>
	)
}
