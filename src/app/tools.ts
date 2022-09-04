export namespace Tools{
	export type ObjectWithSearchKeys<V extends Object> = {
		[K in keyof (V & { [key: PropertyKey]: any })]: (V & { [key: PropertyKey]: any })[K]
	}
}
