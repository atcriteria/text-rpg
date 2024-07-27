/**
 * The game-input event listener. This is what parses
 * player input and commands into actions.
 * 
 * @param {*} e 
 */
const inputListener = e => {
    if (gameInput.value.length == 1){
        const executed = attemptQuickCommand(gameInput.value);
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