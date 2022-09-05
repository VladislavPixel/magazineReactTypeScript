import React from "react"
// Auxiliary
import { useModalCreateProduct } from "../../hooks/useModalCreateProduct"
import { useProducts } from "../../hooks/useProducts"
// Components
import ProductsList from "../ui/productsList"
import Spinner from "../common/spinner"
import ErrorLite from "../common/errorLite"
import Modal from "../ui/modal"
import CreateProduct from "../ui/createProduct"
// TypeScript models
import type { DataType } from "../../models"

const ProductsPage = () => {
	// Auxiliary
	const { data, isLoading, error, addProduct } = useProducts()
	const { isModal, open, close } = useModalCreateProduct()
	// HANDLERS
	const handlerCreateProduct = (dataProduct: DataType.ItemProduct) => {
		addProduct(dataProduct)
		close()
	}
	return (
		<div className="wrapper__container block-container">
			<h1 className="block-container__title">Товары магазина</h1>
			<div className="block-container__wrapper-btn-create-modal">
				<button onClick={open} className="block-container__btn-create-modal">Создать дополнительный товар</button>
			</div>
			{
				isLoading ?
				<div className="block-container__wrap-spinner">
					<Spinner />
				</div> :
				error.length ?
				<ErrorLite classes="block-container__error-text" text={error} /> :
				<ProductsList data={data} />
			}
			{isModal &&
				<Modal textTitle="Модальное окно создания продукта">
					<CreateProduct onCreate={handlerCreateProduct} />
				</ Modal>
			}
		</div>
	)
}

export default ProductsPage