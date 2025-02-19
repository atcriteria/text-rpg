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

/**
 * Pass in strings to have them output into the games text-output section
 * Output is parsed as HTML, to support inline html elements like em
 * @param {string} d 
 */
const writeDialogue = d => {
    // Starting a line with \c will clear the output
    if (d.startsWith("\c")){
        gameOutput.innerHTML = "";
        gameOutput.innerText = "";
        d = d.slice(1, d.length - 1)
    }
    
    const lines = d.split("\n");
    lines.forEach(line => {
        const newLine = document.createElement((line.length == 0) ? "br" : "div")
        newLine.innerHTML = line;
        
        // Text is reversed, so this is actually the end,
        // because text is bottum -> up here.
        gameOutput.prepend(newLine);
    });
}