import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./app/scss/style.scss"
// Components
import App from "./app/App"

const containerHTML = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(containerHTML)

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
