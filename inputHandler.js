/**
 * The game-input event listener. This is what parses
 * player input and commands into actions.
 * 
 * @param {*} e 
 */
const inputListener = e => {
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

const clearInput = () => {
    gameInput.value = "";
}

/**
 * Processes commands...
 * @param {string} command 
 */
const submitCommand = (command) => {
    // console.log(`Command Submitted: ${command}`)
    if (command.length === 1){
        // Process quick command
        return;
    }
    const params = command.split(" ");
    
    if (params.length === 1){
        // Process action
        return;
    }

    // Process more complex command
    const verb = params.shift();
    const text = params.join(" ");
    writeOutput(`Command Executed: ${command}`)
    return;
}

/**
 * Takes in a string of output and renders it to the game-output
 * @param {string} output 
 */
const writeOutput = (output) => {
    const lines = output.split("\n");
    lines.forEach(line => {
        const newLine = document.createElement((line.length == 0) ? "br" : "div")
        newLine.innerText = line;
        console.log(newLine)
        
        // Text is reversed, so this is actually the end,
        // because text is bottum -> up here.
        gameOutput.prepend(newLine);
    });
}