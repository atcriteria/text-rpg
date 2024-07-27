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

/**
 * @param {object} MENU_START
 */
const MENU_START = {
    "1": new MenuItem("Start", processOutput, [blurbs.start, DIALOGUE], "Start Game"),
    "2": new MenuItem("Help", processOutput, [blurbs.help, DIALOGUE], "Game Help"),
    "3": new MenuItem("About", processOutput, [blurbs.about, DIALOGUE], "About"),
}

/**
 * Future Use, in case I want to handle multiple characters at once
 * @param {object} MENU_CHARACTER_SELECT
 */
const MENU_CHARACTER_SELECT = {
    "1": new MenuItem("Create New", processOutput, [blurbs.start, DIALOGUE], "Create a new character"),
}

/**
 * Create a character
 * @param {object} MENU_CHARACTER_CREATE_RACE
 */
const MENU_CHARACTER_CREATE_RACE = {
    "1": new MenuItem("Human", processOutput, [blurbs.start, DIALOGUE], "Human"),
    "9": new MenuItem("<< Back", processOutput, [blurbs.start, DIALOGUE], "Go Back")
}