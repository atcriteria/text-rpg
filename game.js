// Main game file, manages state and specific global functions

class GameInstance {
    constructor() {
        this.state = null;
    }
    /** @param {string} state */
    SetState(state) { this.state = state; }

    // Run once on startup... starts the game.
    // In the future, this will load player state.
    Initialize() {
        this.SetState(STATE_GAME_START);
        processOutput(blurbs.welcome, DIALOGUE);
    }
}

const Game = new GameInstance();