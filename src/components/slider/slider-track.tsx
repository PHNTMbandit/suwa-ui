"use no memo"

import { cn } from "@/utils/cn"
import type { SliderTrackProps } from "./slider.types"

export const SliderTrack = ({
	className,
	children,
	sliderRef,
	...props
}: SliderTrackProps) => {
	return (
		<div
			className={cn(
				"relative h-2xs inset-shadow-1-shadow rounded-full bg-surface-dim grow",
				className,
			)}
			ref={sliderRef}
			{...props}
		>
			{children}
		</div>
	)
}
