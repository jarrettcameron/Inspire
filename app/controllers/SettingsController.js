import { AppState } from "../AppState.js";
import { settingsService } from "../services/SettingsService.js";

export class SettingsController {
    constructor() {
        this.loadSettings()
        AppState.on('settings', this.saveSettings)
    }

    setSetting(key, value) {
        settingsService.setSetting(key, value)
    }

    loadSettings() {
        settingsService.loadSettings()
    }

    saveSettings() {
        settingsService.saveSettings()
    }
}