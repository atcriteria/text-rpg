/**
 * Takes in a string of output and renders it to the game-output
 * @param {string} output
 * @param {string} outputType
 */
const processOutput = (output, outputType) => {
    switch (outputType) {
        case "dialogue":
            writeDialogue(output);
        case "combat":
            break;
        default:
            writeDialogue(output);
    }
}

const writeDialogue = d => {
    const lines = d.split("\n");
    lines.forEach(line => {
        const newLine = document.createElement((line.length == 0) ? "br" : "div")
        newLine.innerText = line;
        console.log(newLine)
        
        // Text is reversed, so this is actually the end,
        // because text is bottum -> up here.
        gameOutput.prepend(newLine);
    });
}