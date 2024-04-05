import { AppState } from "../AppState.js"
import { Templates } from "../models/Templates.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class WeatherController {
    constructor() {
        AppState.on('settings', this.getWeather)
        AppState.on('weather', this.drawWeather)
        this.getWeather()
    }

    changeWeatherPref() {
        switch (AppState.settings.temperaturePreference) {
            case "F":
                AppState.settings.temperaturePreference = "C"
                break
            case "C":
                AppState.settings.temperaturePreference = "K"
                break
            case "K":
                AppState.settings.temperaturePreference = "F"
                break
        }

        AppState.emit('settings')

        this.drawWeather()
    }

    drawWeather() {
        setHTML('weather', Templates.Weather(AppState.weather))
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}