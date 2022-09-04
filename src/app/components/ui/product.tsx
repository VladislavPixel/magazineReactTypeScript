import React, { useState } from "react"
// TypeScript models
import type { DataType } from "../../models"

interface ProductProps{
	data: DataType.ItemProduct;
}

const Product = ({ data }: ProductProps) => {
	// STATE
	const [isActiveDesc, setActiveDesc] = useState<boolean>(false)
	// AUXILIARY
	const { title, price, description, image } = data
	const btnClassName: string = "container-product__btn" + (isActiveDesc ? " active" : "")
	const btnTextContent: string = isActiveDesc ? "Скрыть описание" : "Показать описание"
	// HANDLERS
	const handlerBtnDesc = () => setActiveDesc(prevState => !prevState)
	return (
		<div className="block-products__product-container container-product">
			<div className="container-product__content">
				<div className="container-product__wrap-image">
					<img className="container-product__image" src={image} alt={`Товар: ${title}`} title={title} />
				</div>
				<h3 className="container-product__title">{title}</h3>
				<span className="container-product__price-info">{price}</span>
				{isActiveDesc && <p className="container-product__desc">{description}</p>}
			</div>
			<div className="container-product__bottom">
				<button onClick={handlerBtnDesc} className={btnClassName}>{btnTextContent}</button>
			</div>
		</div>
	)
}

export default Product
