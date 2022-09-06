import React from "react"
import { Route, Routes } from "react-router-dom"
// Components
import ProductsPage from "./components/page/productsPage"
import AboutPage from "./components/page/aboutPage"
import Header from "./components/common/header"


function App() {
	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route path="/" element={ <ProductsPage /> } />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
		</React.Fragment>
	)
}

export default App
