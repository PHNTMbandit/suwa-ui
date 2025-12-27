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
			children={([canSubmit, isSubmitting]) => (
				<Button
					className={cn("w-full", className)}
					disabled={!canSubmit || isSubmitting}
					ref={ref}
					type="submit"
					{...props}
				>
					{isSubmitting ? submittingText : children}
				</Button>
			)}
			selector={(state) => [state.canSubmit, state.isSubmitting]}
		/>
	)
}
