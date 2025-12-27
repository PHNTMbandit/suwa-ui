import { createFormHookContexts } from "@tanstack/react-form"
import type { ComponentProps } from "react"
import type { ButtonExtendedProps } from "../button"
import type { InputProps } from "../input"

export const { fieldContext, useFieldContext, formContext, useFormContext } =
	createFormHookContexts()

export type FieldInputProps = InputProps
export type FieldErrorsProps = ComponentProps<"div">
export type FormErrorsProps = ComponentProps<"div">
export type FieldSubmitButtonProps = ButtonExtendedProps & {
	submittingText?: string
}
