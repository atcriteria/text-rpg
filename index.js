const gameWindow = document.getElementById("game-window")
const gameOutput = document.getElementById("game-output")
const gameInput = document.getElementById("game-input")


gameInput.addEventListener("keydown", inputListener)
gameInput.value = "";

// Finished, clear text

writeOutput(blurbs.welcome);