import { Route, Routes } from "react-router-dom"
// Components
import ProductsPage from "./components/page/productsPage"
import AboutPage from "./components/page/aboutPage"

function App() {
	return (
		<Routes>
			<Route path="/" element={ <ProductsPage /> } />
			<Route path="/about" element={<AboutPage />} />
		</Routes>
	)
}

export default App
