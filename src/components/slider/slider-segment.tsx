"use no memo"

import { cn } from "@/utils/cn"
import type { SliderSegmentProps } from "./slider.types"

export const SliderSegment = ({
	index,
	steps,
	left,
	width,
	className,
	children,
	ref,
	...props
}: SliderSegmentProps) => {
	return (
		<div
			className={cn(
				"absolute bg-primary h-full rounded-full inset-shadow-1-shadow",
				className,
			)}
			ref={ref}
			style={{
				background: `${
					index === steps - 1 ? "transparent" : "var(--color-primary)"
				}`,
				left: `${left}%`,
				width: `${width}%`,
			}}
			{...props}
		>
			{children}
		</div>
	)
}
