import { AppState } from "../AppState.js";
import { Templates } from "../models/Templates.js";

export class PopupController {
    constructor() {
    }

    performPopup(name) {
        if (Templates[name]) {
            document.querySelector("#popup-content").innerHTML = Templates[name]

            document.querySelector("#popup").classList.remove('d-none')
            document.querySelector('#homepage').classList.add('d-none')
        }
    }

    exitPopup() {
        document.querySelector("#popup").classList.add('d-none')
        document.querySelector('#homepage').classList.remove('d-none')
    }
}