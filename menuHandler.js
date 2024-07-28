class MenuInstance {
    constructor(){
        this.state = null;
        this.menu = null;

        // Binding methods to ensure correct context
        // When Class functions are passed as values and invoked later
        // such as processing quickcommands to change menus, the 'this'
        // context will change and throw an exception if we do not bind
        // the methods to the instance.
        this.Initialize = this.Initialize.bind(this);
        this.SetState = this.SetState.bind(this);
        this.RenderMenu = this.RenderMenu.bind(this);
    }
    Initialize(){ this.state = STATE_GAME_START; this.menu = MENU_START; this.RenderMenu(); }

    /** @param {string} state */
    SetState(state, output = null){
        this.state = state.name;
        this.menu = state.menu;
        try {
            this.RenderMenu();
            if (output) writeDialogue(output);
        } catch (error) {
            console.error(error);
        }
    }

    RenderMenu() {
        gameMenu.innerHTML = "";
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