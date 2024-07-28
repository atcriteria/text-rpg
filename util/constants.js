/*** @param {string} DIALOGUE */
const DIALOGUE = "dialogue";

/*** @param {string} STATE_GAME_START */
const STATE_GAME_START = "STATE_GAME_START"



/*** @param {MenuList} MENU_START */
let MENU_START = null;

/*** @param {MenuList} MENU_CHARACTER_SELECT */
let MENU_CHAR_SELECT = null;

/*** @param {MenuList} MENU_CHARACTER_CREATE_RACE */
let MENU_CHAR_CREATE_RACE = null;

/*** @param {object} STATE_MENU_CHAR_SELECT */
const STATE_MENU_START = {
    name: "STATE_MENU_START",
    menu: MENU_START
}

/*** @param {object} STATE_MENU_CHAR_SELECT */
const STATE_MENU_CHAR_SELECT = {
    name: "STATE_MENU_CHAR_SELECT",
    menu: MENU_CHAR_SELECT
}

/*** @param {object} STATE_MENU_CHAR_CREATE_RACE */
const STATE_MENU_CHAR_CREATE_RACE = {
    name: "STATE_MENU_CHAR_CREATE_RACE",
    menu: MENU_CHAR_CREATE_RACE
}