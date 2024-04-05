import { AppState } from "../AppState.js"
import { TODO } from "../models/TODO.js"
import { api } from "./AxiosService.js"

class TODOService {
    constructor() {

    }

    async toggleTODO(id) {
        let todo = AppState.todos.find(x => x.id == id)
        todo.completed = !todo.completed
        await api.put('api/todos/' + id, todo)
        AppState.emit('todos') // Required to update # Todos Remaining counter
    }

    async createTODO(formData) {
        const response = await api.post('api/todos', formData)
        AppState.todos.unshift(new TODO(response.data))
    }

    async deleteTODO(id) {
        await api.delete('api/todos/' + id)
        AppState.todos.splice(AppState.todos.findIndex(x => x.id == id), 1)
    }

    async getTODOs() {
        const response = await api.get('api/todos')
        AppState.todos = response.data.map(x => new TODO(x))
    }
}

export const todoService = new TODOService()