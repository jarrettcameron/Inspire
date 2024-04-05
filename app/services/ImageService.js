import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class ImageService {
    async getImage() {
        const response = await api.get('api/images')
        AppState.image = response.data.largeImgUrl
    }
}

export const imageService = new ImageService()