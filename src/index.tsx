import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./app/scss/style.scss"
import { BrowserRouter } from "react-router-dom"
// Components
import App from "./app/App"
import ModalCreateProductProvider from "./app/hooks/useModalCreateProduct"

const containerHTML = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(containerHTML)

root.render(
	<StrictMode>
		<BrowserRouter>
			<ModalCreateProductProvider>
				<App />
			</ModalCreateProductProvider>
		</BrowserRouter>
	</StrictMode>
)
