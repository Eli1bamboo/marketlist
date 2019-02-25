import axios from 'axios'

const apiClient = axios.create({
	baseURL: '//5c73ffaf826db700140a281f.mockapi.io/api'
})

export default {
	getData() {
		return apiClient.get('/items')
	},
	addItem(payload) {
		return apiClient.post('/items/', payload)
	},
	removeItem(payload) {
		return apiClient.delete('/items/' + payload)
	}
}
