"use no memo"

import { useState } from "react"
import { cn } from "@/utils/cn"
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip"
import type { SliderHandleProps } from "./slider.types"

export const SliderHandle = ({
	sliderInstance,
	isActive,
	onKeyDownHandler,
	onMouseDownHandler,
	onTouchStart,
	value,
	className,
	children,
	ref,
	...props
}: SliderHandleProps) => {
	const [isHovering, setIsHovering] = useState(false)

	return (
		<Tooltip open={isActive || isHovering} trackCursorAxis="x">
			<TooltipTrigger
				render={
					<button
						aria-valuemax={sliderInstance.options.max}
						aria-valuemin={sliderInstance.options.min}
						aria-valuenow={value}
						className={cn(
							"absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none border-2 border-primary bg-surface-container hover:cursor-pointer active:border-secondary hover:border-secondary transition-[width,height,border] aspect-square",
							isActive ? "size-md shadow-4-shadow" : "size-sm shadow-1-shadow",
							className,
						)}
						onKeyDown={onKeyDownHandler}
						onMouseDown={onMouseDownHandler}
						onMouseEnter={() => setIsHovering(true)}
						onMouseLeave={() => setIsHovering(false)}
						onTouchStart={onTouchStart}
						ref={ref}
						role="slider"
						style={{
							left: `${sliderInstance.getPercentageForValue(value)}%`,
							zIndex: isActive ? "1" : "0",
						}}
						{...props}
					>
						{children}
					</button>
				}
			/>
			<TooltipContent>
				<span>{value}</span>
			</TooltipContent>
		</Tooltip>
	)
}
