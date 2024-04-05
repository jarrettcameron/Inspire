import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";
import { setText } from "../utils/Writer.js";

export class ImageController {
    constructor() {
        this.drawTime()
        AppState.on('image', this.drawImage)
        this.getImage()
        setInterval(this.drawTime, 1000)
    }

    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            Pop.error('There was an issue fetching a background-image.')
            console.error(error)
        }
    }

    drawTime() {
        let date = new Date()
        setText('time', date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).toLowerCase())
    }

    drawImage() {
        document.body.setAttribute('style', `background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${AppState.image}');`)
    }
}