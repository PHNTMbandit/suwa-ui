import { cn } from "@/utils/cn"
import { type FieldErrorsProps, useFieldContext } from "./form.types"

export const FieldErrors = ({
	className,
	children,
	ref,
	...props
}: FieldErrorsProps) => {
	const field = useFieldContext()

	return (
		<div className={cn("", className)} ref={ref} {...props}>
			{children}
			{field.state.meta.errors.length > 0 && (
				<div className="mt-2">
					{field.state.meta.errors.map((error) => (
						<p className="text-error text-sm" key={error.message}>
							{error.message}
						</p>
					))}
				</div>
			)}
		</div>
	)
}
