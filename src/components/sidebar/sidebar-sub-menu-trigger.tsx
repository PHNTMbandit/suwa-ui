import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible"
import { CaretRightIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import { PopoverTrigger } from "../popover"
import {
	type SidebarSubMenuTriggerProps,
	sidebarSubMenuTriggerVariants,
} from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarSubMenuTrigger = ({
	leadingIcon: Icon,
	label,
	size,
	className,
	children,
	ref,
	...props
}: SidebarSubMenuTriggerProps) => {
	const { open } = useSidebar()

	if (!open) {
		return (
			<PopoverTrigger
				className={cn(
					sidebarSubMenuTriggerVariants({
						size: open ? size : "compact",
						className,
					}),
					"relative",
				)}
			>
				{children}
				{Icon && (
					<Icon
						className="block size-sm shrink-0 group-data-active:hidden"
						weight="bold"
					/>
				)}
				<CaretRightIcon
					className="absolute right-[4px] size-2xs"
					weight="bold"
				/>
			</PopoverTrigger>
		)
	}

	return (
		<BaseCollapsible.Trigger
			className={cn(
				sidebarSubMenuTriggerVariants({
					size: open ? size : "compact",
					className,
				}),
			)}
			ref={ref}
			{...props}
		>
			<div className="flex h-fit w-full items-center gap-xs">
				{Icon && (
					<Icon
						className="block size-sm shrink-0 group-data-active:hidden"
						weight="bold"
					/>
				)}
				{open && (
					<span
						className={cn(
							"style-text-default-0 slide-in-from-left-2 fade-in-0 animate-in transition-all duration-200 ease-out",
							size === "compact" && "hidden",
						)}
					>
						{label}
					</span>
				)}
			</div>
			{open && (
				<div className="slide-in-from-left-2 fade-in-0 animate-in transition-all duration-200 ease-out">
					{children}
				</div>
			)}
			{open && (
				<CaretRightIcon
					className="slide-in-from-right-2 fade-in-0 size-xs animate-in transition-all duration-300 ease-out group-data-panel-open:rotate-90"
					weight="bold"
				/>
			)}
		</BaseCollapsible.Trigger>
	)
}
