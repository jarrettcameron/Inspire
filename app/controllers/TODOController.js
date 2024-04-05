import { AppState } from "../AppState.js";
import { Templates } from "../models/Templates.js";
import { todoService } from "../services/TODOService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setText } from "../utils/Writer.js";

export class TODOController {
    constructor() {
        AppState.on('account', this.getTODOs)
        AppState.on('todos', this.drawTODOs)
    }

    drawTODOs() {
        setText('todo-count', `${AppState.todos.filter(x => !x.completed).length} Todos Remaining`)
        if (AppState.activePopup != "Todos") return
        document.querySelector("#popup-content").innerHTML = Templates.Todos
    }

    async getTODOs() {
        try {
            await todoService.getTODOs()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async toggleTODO(id) {
        try {
            await todoService.toggleTODO(id)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async createTODO() {
        try {
            event.preventDefault()
            const formData = getFormData(event.target)
            await todoService.createTODO(formData)
            // @ts-ignore
            document.querySelector('#todo-form').reset()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async deleteTODO(id) {
        try {
            let a = await Pop.confirm('Are you sure you want to delete this TODO?')
            if (!a) return
            await todoService.deleteTODO(id)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}