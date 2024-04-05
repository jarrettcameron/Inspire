import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class WeatherService {
    constructor() {

    }

    async getWeather() {
        const response = await api.get('api/weather?name=' + AppState.settings.city)
        AppState.weather = response.data
    }
}

export const weatherService = new WeatherService()