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
    if (k in game.currentMenu){
        console.log("Found quick command...")
        const menuItem = game.currentMenu[k]
        return menuItem.execute();
    }
    return false;
}

const clearInput = () => {
    gameInput.value = "";
}

/**
 * Processes commands...
 * @param {string} command 
 */
const submitCommand = (command) => {
    // console.log(`Command Submitted: ${command}`)
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