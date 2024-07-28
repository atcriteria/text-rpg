class MenuItem {
    /**
     * @param {string} text 
     * @param {function} command 
     * @param {Array} params 
     * @param {string} description 
     */
    constructor(text, command, params, description){
        this.text = text;
        this.command = command;
        this.params = params;
        this.description = description;
    }
    execute(){
        try {
            this.command(...this.params);
            return true;
        } catch (err) {
            return false;
        }
    }
}

class MenuList {
    /** @param {object} obj */
    constructor(obj) {
        console.log(obj)
        for (const k in obj){
            this[k] = obj[k];
        }
        console.log(this)
    }
}

const createMenus = () => {
    MENU_START = new MenuList({
        "1": new MenuItem("Start", Menu.SetState, [STATE_MENU_CHAR_SELECT], "Start Game"),
        "2": new MenuItem("Help", processOutput, [blurbs.help, DIALOGUE], "Game Help"),
        "3": new MenuItem("About", processOutput, [blurbs.about, DIALOGUE], "About"),
    });

    MENU_CHAR_SELECT = new MenuList({
        "1": new MenuItem("Create New", Menu.SetState, [STATE_MENU_CHAR_CREATE_RACE], "Create a new character"),
    });

    MENU_CHAR_CREATE_RACE = new MenuList({
        "1": new MenuItem("Human", processOutput, [blurbs.start, DIALOGUE], "Human"),
        "9": new MenuItem("<< Back", processOutput, [blurbs.start, DIALOGUE], "Go Back")
    });
}


// Assigns real values to all vars
// This is a bit redundant but must be done to ensure everything is able
// to be loaded without relying on references to objects that have not
// been loaded yet.
const InitializeMenus = () => {
    createMenus();
    STATE_MENU_START.menu = MENU_START;
    STATE_MENU_CHAR_CREATE_RACE.menu = MENU_CHAR_CREATE_RACE;
    STATE_MENU_CHAR_SELECT.menu = MENU_CHAR_SELECT;
}
InitializeMenus();