const gameWindow = document.getElementById("game-window")
const gameOutput = document.getElementById("game-output")
const gameInput = document.getElementById("game-input")
const gameMenu = document.getElementById("game-commands")


gameInput.addEventListener("keydown", inputListener)
gameInput.value = "";

// Finished, clear text
const game = {
    state: ""
}

game.state = STATE_GAME_START;


// Render menu commands.
// TODO: Pull these two menu functions into a menuHandler class....
const getMenu = () => {
    switch (game.state) {
        case STATE_GAME_START:
            return MENU_START;
        default:
            return MENU_START;
    }
}

const renderMenu = menu => {
    gameMenu.innerText = "";
    for (const key in menu) {
        const elem = document.createElement("div")
        elem.className = "menu-item"
        elem.innerText = `${key} ... ${menu[key]["text"]}`
        gameMenu.appendChild(elem)
    }
}

renderMenu(getMenu());
processOutput(blurbs.welcome, DIALOGUE);