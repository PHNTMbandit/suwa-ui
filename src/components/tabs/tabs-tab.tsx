import { Tabs as SwitchTabs } from "@base-ui/react/tabs"
import { cn } from "@/utils/cn"
import type { TabsTabProps } from "./tabs.types"

export const TabsTab = ({ className, ...props }: TabsTabProps) => {
	return (
		<SwitchTabs.Tab
			className={cn(
				"body-base-semibold inline-flex h-11 w-full select-none items-center justify-center whitespace-nowrap break-keep rounded-2xl border-0 px-6 text-center text-text-brand-primary-default outline-none transition-colors duration-300 hover:cursor-pointer focus-visible:relative focus-visible:before:absolute focus-visible:before:outline aria-[selected=false]:hover:bg-surface-neutral-primary-hover data-selected:text-text-inverse-primary-default md:h-12 md:rounded-full",
				className,
			)}
			{...props}
		/>
	)
}
