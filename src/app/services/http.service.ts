import axios from "axios"

const http = axios.create()

const httpService = {
	get: http.get,
	post: http.post,
	put: http.put,
	patch: http.patch,
	options: http.options,
	delete: http.delete
}

export default httpService
