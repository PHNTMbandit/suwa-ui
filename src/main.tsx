import React from "react"
import ReactDOM from "react-dom/client"
import { ToastProvider } from "./components"
import "./styles.css"

const rootElement = document.getElementById("root")

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<ToastProvider position="bottom-right">
				<main></main>
			</ToastProvider>
		</React.StrictMode>,
	)
}
