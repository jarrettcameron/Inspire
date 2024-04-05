import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class QuoteService {
    constructor() {

    }

    async getQuote() {
        const response = await api.get('api/quotes')
        AppState.quote = response.data
    }
}

export const quoteService = new QuoteService()