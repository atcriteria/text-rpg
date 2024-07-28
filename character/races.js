class Race {
    /**
     * 
     * @param {string} name 
     * @param {string} description 
     * @param {object} boons 
     */
    constructor(name, description, boons){
        this.name = name;
        this.description = description;
        for (let b in boons){
            this[b.name] = b.value
        }
    }
}

const Human = new Race(
    "Human",
    "Versatile and ambitious, excelling in a variety of fields and professions.",
    {
    "name": "todo", "value": "todo",
    "name": "todo2", "value": "todo",
    "name": "todo3", "value": "todo",
});

const HighElf = new Race(
    "High Elf",
    "Elegant and wise, known for their magical prowess and long lifespans.",
    {
    "name": "todo", "value": "todo",
    "name": "todo2", "value": "todo",
    "name": "todo3", "value": "todo",
});

const DarkElf = new Race(
    "Dark Elf",
    "Mysterious and cunning, thriving in shadows with a talent for stealth.",
    {
    "name": "todo", "value": "todo",
    "name": "todo2", "value": "todo",
    "name": "todo3", "value": "todo",
});

const Orc = new Race(
    "Orc",
    "Strong and fierce, valued for their brute strength and warrior spirit.",
    {
    "name": "todo", "value": "todo",
    "name": "todo2", "value": "todo",
    "name": "todo3", "value": "todo",
});

const Dwarf = new Race(
    "Dwarf",
    "Stout and resilient, master craftsmen and miners of the deep.",
    {
    "name": "todo", "value": "todo",
    "name": "todo2", "value": "todo",
    "name": "todo3", "value": "todo",
});

const CHAR_RACES = [
    Human, HighElf, DarkElf, Orc, Dwarf
]


/**
 * Called in the character create menu.
 * Outputs some html to dynamically format all of the races,
 * give their descriptions, and list their boons.
 * @returns {string}
 */
const DescribeRaces = () => {
    let output = "\c<h2>Select A Race</h2>\n\n";

    CHAR_RACES.forEach(race => {
        let blurb = `<h3>${race.name}</h3><p>${race.description}</p>\n\n`;
        output = output.concat(blurb);
    });

    return output;
}
const describeRaces = DescribeRaces();