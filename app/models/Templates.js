import { AppState } from "../AppState.js"

export class Templates {
    constructor() {

    }

    static PanelSkeleton(name, content) {
        return /*html*/`
            <div class="col-6">
                <span class="fs-3 fw-semi">${name}</span>
            </div>
            <div class="col-6">
                ${name != "Login" ? `<i onclick="app.PopupController.exitPopup()" class="pointer float-end fs-3 mdi mdi-arrow-right-thick"></i>` : ``}
            </div>
            <div class="col-12 w-100">
                <div class="mb-3 mt-1 px-3 w-100 border-bottom border-2"></div>
                ${content}
            </div>
        `
    }

    static get Settings() {
        let content = /*html*/`
        <label>Background Image Categories</label>
        <input type="text" class="form-control my-2" value="${AppState.settings.categories}" onchange="app.SettingsController.setSetting('categories', this.value)">
        <label>Temperature Unit</label>
        <select class="form-control" name="" id="" onchange="app.SettingsController.setSetting('temperaturePreference', this.value)">
            <option value="F" ${AppState.settings.temperaturePreference == 'F' ? "selected" : ''}>Fahrenheit</option>
            <option value="C" ${AppState.settings.temperaturePreference == 'C' ? "selected" : ''}>Celsius</option>
            <option value="K" ${AppState.settings.temperaturePreference == 'K' ? "selected" : ''}>Kelvin</option>
        </select>
        <div class="form-check form-switch my-2">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onchange="app.SettingsController.setSetting('militaryTime', this.checked)" ${AppState.settings.militaryTime ? 'checked' : ''}>
            <label class="form-check-label" for="flexSwitchCheckDefault">Military Time</label><br>
        </div>
        `
        return this.PanelSkeleton('Settings', content)
    }

    static get Login() {
        let content = /*html*/`
        <h4 class="pt-3 mt-5">You are not logged in.</h4>
        <p>An account is required for this application to run properly. Please sign in below.</p>
        <button onclick="app.AuthController.login()" class="w-100 mt-3 btn btn-outline-light">Login</button>
        `
        return this.PanelSkeleton('Login', content)
    }

    static get Todos() {
        const todoList = this.TodoList
        let content = /*html*/`
        ${todoList.length > 0 ? todoList : `<p class="text-center text-secondary mb-3 fst-italic">You don't have any TO-DOs.</p>`}
        <div class="mb-3 mt-1 px-3 w-100 border-bottom border-2"></div>
        <form onsubmit="app.TODOController.createTODO()" id="todo-form">
            <label>Name</label>
            <input class="mt-1 form-control" name="description" type="text" required>
            <div class="mt-3 text-center">
                <button class="px-4 btn btn-outline-light">Create TODO</button>
            </div>
        </form>
        `
        return this.PanelSkeleton('TODOs', content)
    }

    static get TodoList() {
        return AppState.todos.map(x => x.ListItem).join('')
    }

    static Weather(weatherData) {
        return /*html*/`
        <div class="row p-2 align-items-center">
            <div class="col">
                <img src="${weatherData.weather.icon}" class="d-inline weather-icon" alt="">
                <div class="d-inline">
                    <span class="fs-5">${weatherData.name}</span>
                    <span class="ps-1">${weatherData.weather[0].main}</span>
                </div>
            </div>
            <div class="col-3 me-2 reem text-end">
                <span class="fs-2 pointer" title="Click to switch units" onclick="app.WeatherController.changeWeatherPref()">${this.weatherFormat(weatherData.main.temp)}</span>
            </div>
        </div>
        `
    }

    static weatherFormat(temp) {
        let formatted = temp
        switch (AppState.settings.temperaturePreference) {
            case "F":
                formatted = (formatted - 273.15) * 9 / 5 + 32
                break
            case "C":
                formatted = formatted - 273.15
                break
        }
        return formatted.toFixed(0) + AppState.settings.temperaturePreference
    }
}