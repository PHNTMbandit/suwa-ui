/** biome-ignore-all lint/correctness/noChildrenProp: Just because */
import { cn } from "@/utils/cn"
import { Button } from "../button"
import { type FieldSubmitButtonProps, useFormContext } from "./form.types"

export const FormSubmit = ({
	submittingText = "Submitting...",
	className,
	children,
	ref,
	...props
}: FieldSubmitButtonProps) => {
	const form = useFormContext()

	return (
		<form.Subscribe
			children={(state) => (
				<Button
					className={cn("w-full", className)}
					disabled={!state.canSubmit || state.isSubmitting}
					ref={ref}
					type="submit"
					{...props}
				>
					{state.isSubmitting ? submittingText : children}
				</Button>
			)}
		/>
	)
}
