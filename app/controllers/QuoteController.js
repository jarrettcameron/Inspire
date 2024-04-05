import { AppState } from "../AppState.js"
import { quoteService } from "../services/QuoteService.js"
import { Pop } from "../utils/Pop.js"
import { setText } from "../utils/Writer.js"

export class QuoteController {
    constructor() {
        AppState.on('quote', this.drawQuote)
        this.getQuote()
    }

    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch (error) {
            Pop.error('There was a problem getting a quote.')
            console.error(error)
        }
    }

    drawQuote() {
        setText('quote', AppState.quote.content)
        setText('author', AppState.quote.author)
    }
}