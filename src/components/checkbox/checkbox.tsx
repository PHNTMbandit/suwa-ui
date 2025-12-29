import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox"
import { CheckIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { CheckboxRootProps } from "./checkbox.types"
import { CheckboxIndicator } from "./checkbox-indicator"

export const Checkbox = ({
	className,
	ref,
	label,
	id,
	disabled,
	...props
}: CheckboxRootProps) => {
	return (
		<div className="flex items-center gap-2">
			<BaseCheckbox.Root
				className={cn(
					"data-checked:raised-1 inset-shadow-1-shadow flex size-md items-center justify-center rounded-sm bg-surface-dim text-on-accent transition-colors hover:cursor-pointer hover:disabled:cursor-not-allowed data-checked:bg-accent",
					className,
				)}
				disabled={disabled}
				id={id}
				ref={ref}
				{...props}
			>
				<CheckboxIndicator>
					<CheckIcon weight="bold" />
				</CheckboxIndicator>
			</BaseCheckbox.Root>
			{label && (
				<label
					className={cn(
						"body-base cursor-pointer",
						disabled && "cursor-not-allowed text-text-neutral-primary-disabled",
					)}
					htmlFor={id}
				>
					{label}
				</label>
			)}
		</div>
	)
}
