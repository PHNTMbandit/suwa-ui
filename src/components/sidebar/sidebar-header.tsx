import { cn } from "@/utils/cn"
import type { SidebarHeaderProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarHeader = ({
	className,
	children,
	ref,
	...props
}: SidebarHeaderProps) => {
	const { open } = useSidebar()

	return (
		<div
			className={cn(
				"overflow-hidden truncate transition-all duration-300 ease-in-out",
				open ? "px-xl pt-xl" : "max-w-2xl overflow-hidden p-sm",
				className,
			)}
			ref={ref}
			{...props}
		>
			<div
				className={cn(
					"animate-in transition-all duration-200 ease-out",
					open ? "fade-in-0" : "fade-out-0",
				)}
			>
				{children}
			</div>
		</div>
	)
}
