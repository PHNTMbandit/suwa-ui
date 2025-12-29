import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area"
import { cn } from "@/utils/cn"
import type { ScrollAreaProps } from "./scroll-area.types"

export const ScrollArea = ({
	orientation = "vertical",
	className,
	children,
	ref,
	...props
}: ScrollAreaProps) => {
	return (
		<BaseScrollArea.Root
			className={cn(
				"h-[200px] rounded-lg bg-surface-container",
				orientation === "horizontal" && "h-full",
				className,
			)}
			ref={ref}
			{...props}
		>
			<BaseScrollArea.Viewport
				className={
					"prose-step-0 flex h-full flex-col gap-xs overscroll-contain py-2xs pr-sm pl-sm"
				}
			>
				{children}
			</BaseScrollArea.Viewport>
			<BaseScrollArea.Scrollbar
				className={cn(
					"inset-shadow-1-shadow flex justify-center rounded bg-surface-dim p-[2px] opacity-0 transition-opacity delay-300 hover:cursor-pointer data-hovering:opacity-100 data-scrolling:opacity-100 data-hovering:delay-0 data-scrolling:delay-0 data-hovering:duration-75 data-scrolling:duration-75",
					orientation === "vertical" && "my-2xs mr-2xs w-2xs",
					orientation === "horizontal" && "mx-xs mb-2xs h-2xs flex-col",
					className,
				)}
				orientation={orientation}
			>
				<BaseScrollArea.Thumb
					className={"h-full w-full rounded-1 rounded-full bg-accent"}
				/>
			</BaseScrollArea.Scrollbar>
			<BaseScrollArea.Corner />
		</BaseScrollArea.Root>
	)
}
