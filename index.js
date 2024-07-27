const gameWindow = document.getElementById("game-window")
const gameOutput = document.getElementById("game-output")
const gameInput = document.getElementById("game-input")
const gameMenu = document.getElementById("game-commands")


gameInput.addEventListener("keydown", inputListener)
gameInput.value = "";

Game.Initialize();
console.log("Game Ready")