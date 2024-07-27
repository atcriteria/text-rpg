/**
 * The game-input event listener. This is what parses
 * player input and commands into actions.
 * 
 * @param {Event} e 
 */
const inputListener = e => {
    let executed = false;
    if (e.target.value.length <= 1) executed = attemptQuickCommand(e.key);
    if (executed){
        // Prevents the keystroke from being sent to input container.
        e.preventDefault();
        flashMenu(e.key)
        return;
    }

    switch (e.key) {
        //Submit Command
        case "Enter":
            e.preventDefault();
            submitCommand(gameInput.value);
            clearInput();
            return;
        // Clear the text on escape.
        case "Escape":
            clearInput();
            return;
        default:
            break;
    }
};

/**
 * 
 * @param {string} k 
 * @returns {boolean}
 */
const attemptQuickCommand = k => {
    if (k in Game.menu){
        const menuItem = Game.menu[k]
        return menuItem.execute();
    }
    return false;
}

/**
 * Adds a class to the menu item executed that causes a visual
 * effect for a brief time before removing the class.
 * @param {string} menuKey // the key that we are executing, 0/1/2/3/4, etc
 */
const flashMenu = menuKey => {
    const item = document.getElementById(`menu-item-${menuKey}`)
    item.classList.add("menu-flash")
    setTimeout(() => {
        item.classList.remove("menu-flash")
    }, 100)
}

const clearInput = () => {
    gameInput.value = "";
}

/**
 * Processes commands...
 * @param {string} command 
 */
const submitCommand = (command) => {
    const params = command.split(" ");
    
    if (params.length === 1){
        // Process action
        return;
    }

    // Process more complex command
    const verb = params.shift();
    const text = params.join(" ");
    processOutput(`Command Executed: ${command}`, DIALOGUE)
    return;
}