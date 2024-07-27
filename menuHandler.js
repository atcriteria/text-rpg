class MenuInstance {
    constructor(){
        this.state = null;
        this.menu = null;
    }
    Initialize(){ this.state = STATE_GAME_START; this.menu = MENU_START; this.RenderMenu(); }

    /** @param {string} state */
    SetState(state){ this.state = state; }

    RenderMenu() {
        gameMenu.innerText = "";
        for (const key in this.menu) {
            const elem = document.createElement("div")
            elem.className = "menu-item"
            elem.id = `menu-item-${key}`
            elem.innerText = `${key} ... ${this.menu[key]["text"]}`
            gameMenu.appendChild(elem)
        }
    }
}

const Menu = new MenuInstance();