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