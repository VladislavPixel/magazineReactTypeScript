// Components
import Product from "./product"
// TypeScript models
import type { DataType } from "../../models"

interface ProductsListProps{
	data: DataType.ItemProduct[]
}

const ProductsList = ({ data }: ProductsListProps) => {
	return (
		<div className="block-container__products-list block-products">
			{data.map((item, index) => <Product key={index + item.id} data={item} />)}
		</div>
	)
}

export default ProductsList
