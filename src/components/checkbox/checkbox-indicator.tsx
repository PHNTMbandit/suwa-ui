import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox"
import { cn } from "@/utils/cn"
import type { CheckboxIndicatorProps } from "./checkbox.types"

export const CheckboxIndicator = ({
	className,
	...props
}: CheckboxIndicatorProps) => {
	return <BaseCheckbox.Indicator className={cn("flex", className)} {...props} />
}
