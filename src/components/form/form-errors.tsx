import { useStore } from "@tanstack/react-form"
import { cn } from "@/utils/cn"
import { type FormErrorsProps, useFormContext } from "./form.types"

export const FormErrors = ({
	className,
	children,
	ref,
	...props
}: FormErrorsProps) => {
	const form = useFormContext()
	const formErrors = useStore(form.store, (formState) => formState.errors)

	return (
		<div className={cn("", className)} ref={ref} {...props}>
			{children}
			<div className="mt-2">
				{formErrors.map((error) => (
					<p className="text-error text-sm" key={error.message}>
						{error.message}
					</p>
				))}
			</div>
		</div>
	)
}
