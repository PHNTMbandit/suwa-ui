import { cn } from "@/utils/cn"
import { Input } from "../input"
import { type FieldInputProps, useFieldContext } from "./form.types"

export const FieldInput = ({
	className,
	children,
	ref,
	...props
}: FieldInputProps) => {
	const field = useFieldContext<string>()

	return (
		<Input
			className={cn(
				field.state.value &&
					field.getMeta().errors.length > 0 &&
					"outline-error",
				field.state.value && field.getMeta().isValid && "outline-success",
				className,
			)}
			id={field.name}
			name={field.name}
			onChange={(e) => field.handleChange(e.target.value)}
			ref={ref}
			required
			type="text"
			value={field.state.value}
			{...props}
		>
			{children}
		</Input>
	)
}
