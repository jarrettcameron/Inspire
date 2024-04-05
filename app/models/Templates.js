export class Templates {
    constructor() {

    }

    static PanelSkeleton(name, content) {
        return /*html*/`
            <div class="col-6">
                <span class="fs-3 fw-semi">${name}</span>
            </div>
            <div class="col-6">
                <i onclick="app.PopupController.exitPopup()" class="pointer float-end fs-3 mdi mdi-arrow-right-thick"></i>
            </div>
            ${content}
        `
    }

    static get Settings() {
        let content = /*html*/`
        <p>Content</p>
        `
        return this.PanelSkeleton('Settings', content)
    }
}