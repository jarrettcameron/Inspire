export class TODO {
    constructor(data) {
        this.completed = data.completed
        this.description = data.description
        this.id = data.id
    }

    get ListItem() {
        return /*html*/`
        <div class="row mb-3 fs-5 align-items-center">
            <div class="col-1">
                <input onchange="app.TODOController.toggleTODO('${this.id}')" class="pointer form-check-input" type="checkbox" ${this.completed ? 'checked' : ''}>
            </div>
            <div class="col-10">
                <span>${this.description}</span>
            </div>
            <div class="col-1">
                <i onclick="app.TODOController.deleteTODO('${this.id}')" class="pointer mdi mdi-delete"></i>
            </div>
        </div>
        `
    }
}