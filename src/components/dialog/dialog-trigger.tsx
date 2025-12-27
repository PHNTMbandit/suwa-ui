import { Dialog as BaseDialog } from "@base-ui/react/dialog"
import { cn } from "@/utils/cn"
import type { DialogTriggerProps } from "./dialog.types"

export const DialogTrigger = ({
	className,
	children,
	ref,
	...props
}: DialogTriggerProps) => {
	return (
		<BaseDialog.Trigger className={cn("", className)} ref={ref} {...props}>
			{children}
		</BaseDialog.Trigger>
	)
}
