import { AppState } from "../AppState.js"
import { loadState, saveState } from "../utils/Store.js"

class SettingsService {
    constructor() {

    }

    setSetting(key, value) {
        AppState.settings[key] = value
        AppState.emit('settings')
        AppState.emit('weather')
    }

    saveSettings() {
        saveState('settings', AppState.settings)
    }

    loadSettings() {
        const settings = loadState('settings', Object)
        if (settings.city == null) return
        AppState.settings = settings
    }
}

export const settingsService = new SettingsService()