// Main game file, manages state and specific global functions

class GameInstance {
    constructor() {
        this.state = null;
        this.menu = null;
    }
    /** @param {object} menu */
    SetMenu(menu){ this.menu = menu; }

    /** @param {string} state */
    SetState(state) { this.state = state; }

    // Run once on startup... starts the game.
    // In the future, this will load player state.
    Initialize() {
        this.SetState(STATE_GAME_START);
        this.SetMenu(getMenu(this.state));
        renderMenu(this.menu);
        processOutput(blurbs.welcome, DIALOGUE);
    }
}

const Game = new GameInstance();