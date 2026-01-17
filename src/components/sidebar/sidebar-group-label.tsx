import { cn } from "@/utils/cn"
import type { SidebarGroupLabelProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarGroupLabel = ({
	className,
	children,
	ref,
	...props
}: SidebarGroupLabelProps) => {
	const { open } = useSidebar()

	if (!open) {
		return null
	}

	return (
		<span
			className={cn(
				"style-text-default--2 slide-in-from-left-2 fade-in-0 fade-in truncate pl-sm text-on-surface-variant uppercase transition-all duration-200 ease-out",
				open && "animate-in",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</span>
	)
}
