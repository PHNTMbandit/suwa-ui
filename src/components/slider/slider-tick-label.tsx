"use no memo"

import { cn } from "@/utils/cn"
import type { SliderTickLabelProps } from "./slider.types"

export const SliderTickLabel = ({
	className,
	children,
	ref,
	...props
}: SliderTickLabelProps) => {
	return (
		<p
			className={cn(
				"absolute text-[0.6rem] top-full -translate-x-1/2 translate-y-[1.2rem] whitespace-nowrap style-text-default--1 text-on-surface-variant",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</p>
	)
}
