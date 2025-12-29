import { Toast as BaseToast } from "@base-ui/react/toast"
import { cn } from "@/utils/cn"
import { Toast } from "./toast"
import type { ToastProviderProps } from "./toast.types"

export const ToastProvider = ({
	position = "bottom-center",
	className,
	children,
	ref,
	...props
}: ToastProviderProps) => {
	return (
		<BaseToast.Provider timeout={5000}>
			{children}
			<BaseToast.Portal>
				<BaseToast.Viewport
					className={cn(
						{
							"fixed top-[1rem] right-auto bottom-auto left-[1rem] z-10 mx-0 flex w-1/4":
								position === "top-left",
							"fixed top-[1rem] right-auto bottom-auto left-1/2 z-10 mx-auto flex w-1/4 -translate-x-1/2":
								position === "top-center",
							"fixed top-[1rem] right-[1rem] bottom-auto left-auto z-10 mx-0 flex w-1/4":
								position === "top-right",
							"fixed top-auto right-auto bottom-[6rem] left-[1rem] z-10 mx-0 flex w-1/4":
								position === "bottom-left",
							"fixed top-auto right-auto bottom-[6rem] left-1/2 z-10 mx-auto flex w-1/4 -translate-x-1/2":
								position === "bottom-center",
							"fixed top-auto right-[1rem] bottom-[6rem] left-auto z-10 mx-0 flex w-1/4":
								position === "bottom-right",
						},
						className,
					)}
					ref={ref}
					{...props}
				>
					<Toast position={position} />
				</BaseToast.Viewport>
			</BaseToast.Portal>
		</BaseToast.Provider>
	)
}
