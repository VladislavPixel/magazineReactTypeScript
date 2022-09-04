import React from "react"
import { useProducts } from "./hooks/products"
// Components
import ProductsList from "./components/ui/productsList"
import Spinner from "./components/common/spinner"
import ErrorLite from "./components/common/errorLite"
import Modal from "./components/ui/modal"
import CreateProduct from "./components/ui/createProduct"

function App() {
	const { data, isLoading, error } = useProducts()
	return (
		<div className="wrapper__container block-container">
			<h1 className="block-container__title">Товары магазина</h1>
			{
				isLoading ?
				<div className="block-container__wrap-spinner">
					<Spinner />
				</div> :
				error.length ?
				<ErrorLite classes="block-container__error-text" text={error} /> :
				<ProductsList data={data} />
			}
			<Modal textTitle="Модальное окно создания продукта">
				<CreateProduct  />
			</ Modal>
		</div>
	)
}

export default App
