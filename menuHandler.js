// Render menu commands.
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
        elem.id = `menu-item-${key}`
        elem.innerText = `${key} ... ${menu[key]["text"]}`
        gameMenu.appendChild(elem)
    }
}