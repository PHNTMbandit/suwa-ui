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
					"flex size-md items-center text-on-accent justify-center rounded-sm bg-surface-dim inset-shadow-1-shadow data-checked:bg-accent data-checked:raised-1 hover:cursor-pointer transition-colors hover:disabled:cursor-not-allowed",
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
						disabled && "text-text-neutral-primary-disabled cursor-not-allowed",
					)}
					htmlFor={id}
				>
					{label}
				</label>
			)}
		</div>
	)
}
