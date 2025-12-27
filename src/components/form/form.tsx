import { createFormHook } from "@tanstack/react-form"
import { FieldErrors } from "./field-errors"
import { FieldInput } from "./field-input"
import { fieldContext, formContext } from "./form.types"
import { FormErrors } from "./form-errors"
import { FormSubmit } from "./form-submit"

export const Form = createFormHook({
	fieldComponents: {
		FieldErrors,
		FieldInput,
	},
	formComponents: {
		FormErrors,
		FormSubmit,
	},
	fieldContext,
	formContext,
})
