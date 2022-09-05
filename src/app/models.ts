export namespace DataType{
	interface RatingProduct{
		rate: number;
		count: number;
	}
	export interface ItemProduct{
		id: number;
		title: string;
		price: number;
		description: string;
		category: string;
		image: string;
		rating: RatingProduct;
	}
}