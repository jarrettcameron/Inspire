import { AppState } from "../AppState.js";
import { Templates } from "../models/Templates.js";

export class PopupController {

    constructor() {
        AppState.on('account', this.exitPopup)

        this.performPopup('Login')
    }

    exitPopup() {
        document.querySelector("#popup").classList.add('d-none')
        document.querySelector('#homepage').classList.remove('d-none')
    }

    performPopup(name) {
        if (Templates[name]) {
            AppState.activePopup = name
            document.querySelector("#popup-content").innerHTML = Templates[name]

            document.querySelector("#popup").classList.remove('d-none')
            document.querySelector('#homepage').classList.add('d-none')
        }
    }
}