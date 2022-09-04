import { useState, useEffect } from "react"
// TypeScript models
import type { DataType } from "../models"
import type { Tools } from "../tools"
// Auxiliary
import httpService from "../services/http.service"
import config from "../config.json"

export interface UseProducts{
	isLoading: boolean;
	data: DataType.ItemProduct[];
	error: string;
}

export function useProducts(): UseProducts {
	const [isLoading, setLoading] = useState<boolean>(true)
	const [data, setData] = useState<DataType.ItemProduct[]>([])
	const [error, setError] = useState<string>("")
	function isObjectEssenceWithMessageKey(value: unknown): value is Tools.ObjectWithSearchKeys<{ message: any }> {
		if (value instanceof Object && "message" in value) return true
		return false
	}
	async function fetchAllDataProducts() {
		setLoading(true)
		setError("")
		try {
			const responce = await httpService.get(config.apiEndPoint)
			const dataProducts: DataType.ItemProduct[] = responce.data
			setData(dataProducts)
		} catch (err: unknown) {
			// А можно было сделать const error = err as AxiosError
			// И просто записать setError(error.message), тогда бы TS понимал, что там есть message key
			const isObj = isObjectEssenceWithMessageKey(err)
			if (isObj) {
				const messageText: string = err.message
				setError(messageText)
			}
		} finally {
			setLoading(false)
		}
	}
	useEffect(() => {
		if (data.length) {
			setLoading(false)
		} else {
			fetchAllDataProducts()
		}
	}, [data.length])
	return {
		data,
		error,
		isLoading
	}
}
