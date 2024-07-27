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
    "0": new MenuItem("Start", processOutput, [blurbs.start, DIALOGUE], "Start Game"),
    "1": new MenuItem("Help", processOutput, [blurbs.start, DIALOGUE], "Game Help"),
    "2": new MenuItem("About", processOutput, [blurbs.start, DIALOGUE], "About"),
}