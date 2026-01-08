import { MoonIcon, SunIcon } from "@phosphor-icons/react"
import type * as React from "react"
import { useTheme } from "@/hooks/theme-provider"
import { cn } from "@/utils/cn"
import { Button } from "./button"

type ThemeToggleProps = React.ComponentProps<"button" & typeof Button>

export const ThemeToggle = ({
	className,
	children,
	ref,
	...props
}: ThemeToggleProps) => {
	const { theme, setTheme } = useTheme()

	const handleClick = () => {
		const nextTheme = theme === "light" ? "dark" : "light"
		setTheme(nextTheme)
	}

	return (
		<Button
			className={cn("", className)}
			ref={ref}
			style="ghost"
			tone={"neutral"}
			{...props}
			onClick={handleClick}
		>
			{children}
			{theme === "light" ? (
				<SunIcon weight="bold" />
			) : (
				<MoonIcon weight="bold" />
			)}
		</Button>
	)
}
