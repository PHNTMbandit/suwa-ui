import { cn } from "@/utils/cn"
import { type BadgeExtendedProps, badgeVariants } from "./badge.types"

export const Badge = ({
	className,
	tone,
	style,
	radius,
	children,
	ref,
	...props
}: BadgeExtendedProps) => {
	return (
		<div
			className={cn(badgeVariants({ className, tone, style, radius }))}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
