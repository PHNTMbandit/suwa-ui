import React from "react"
import { cn } from "@/utils/cn"
import type { SidebarProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const Sidebar = ({
	className,
	children,
	ref,
	...props
}: SidebarProps) => {
	const { open, setOpen, isMobile } = useSidebar()
	const sidebarRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node)
			) {
				if (isMobile && open && setOpen) {
					setOpen(false)
				}
			}
		}

		document.addEventListener("click", handleOutsideClick)

		return () => {
			document.removeEventListener("click", handleOutsideClick)
		}
	}, [open, setOpen, isMobile])

	return (
		<div
			className={cn(
				"flex h-full flex-col justify-between overflow-hidden border-outline-variant border-r bg-surface-bright transition-[width] duration-300 ease-in-out",
				className,
				open
					? "w-1/3 gap-xl lg:w-1/5"
					: isMobile
						? "absolute w-[0px] gap-sm"
						: "gap-sm lg:w-[80px]",
			)}
			ref={sidebarRef}
			{...props}
		>
			{children}
		</div>
	)
}
