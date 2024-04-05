import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class ImageService {
    async getImage() {
        // @ts-ignore
        const response = await api.get('api/images' + (AppState.settings.categories == '' ? '' : `?category=${AppState.settings.categories.replaceAll(' ', '')}`))
        AppState.image = response.data.largeImgUrl
    }
}

export const imageService = new ImageService()