const gameWindow = document.getElementById("game-window")
const gameOutput = document.getElementById("game-output")
const gameInput = document.getElementById("game-input")
const gameMenu = document.getElementById("game-commands")


gameInput.addEventListener("keydown", inputListener)
gameInput.value = "";

// Finished, clear text
const game = {
    state: "",
    currentMenu: {}
}

game.state = STATE_GAME_START;
game.currentMenu = getMenu(game.state);

renderMenu(game.currentMenu);
processOutput(blurbs.welcome, DIALOGUE);

console.log("Game Ready")