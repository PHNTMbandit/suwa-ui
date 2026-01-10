import React from "react"
import ReactDOM from "react-dom/client"
import { Badge, Button, Slider, ToastProvider } from "./components"
import "./styles.css"

const rootElement = document.getElementById("root")

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<ToastProvider>
				<main>
					<Button>Click me</Button>
					<Slider />
					<Badge radius="circle" tone="primary">
						New
					</Badge>
				</main>
			</ToastProvider>
		</React.StrictMode>,
	)
}
