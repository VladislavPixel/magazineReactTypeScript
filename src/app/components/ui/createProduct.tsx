import React, { useState } from "react"
// Components
import ErrorLite from "../common/errorLite"
// TypeScript models
import type { DataType } from "../../models"
// Auxiliary
import httpService from "../../services/http.service"
import config from "../../config.json"
import type { AxiosError } from "axios"

const exampleProductData: DataType.ItemProduct = {
	rating: {
		rate: 99,
		count: 17
	},
	title: "test product",
	price: 13.5,
	description: "lorem ipsum set",
	image: "https://i.pravatar.cc",
	category: "electronic"
}

const CreateProduct = () => {
	const [value, setValue] = useState<string>("")
	const [error, setError] = useState("")
	const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(prevState => event.target.value)
	const handlerSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		if (value.trim() === "") {
			setError("Пожалуйста, заполните название создаваемого продукта")
			return
		}
		try{
			const responce = await httpService.post<DataType.ItemProduct>(config.apiEndPoint, {
				id: Date.now(),
				...exampleProductData,
				title: value
			})
		} catch (err: unknown) {
			const errorEssence = err as AxiosError
			setError(errorEssence.message)
		}
	}
	return (
		<form onSubmit={handlerSubmit} className="block-modal__form-create-product product-create-form">
			{error.length !== 0 && <ErrorLite classes="product-create-form__error-message" text={error} />}
			<input name="value" onChange={handlerChange} value={value} className="product-create-form__input" type="text" placeholder="enter product title" />
			<button className="product-create-form__btn" type="submit">Создать</button>
		</form>
	)
}

export default CreateProduct
