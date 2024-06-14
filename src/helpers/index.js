import { betls, defenses, kicks, levels, numbers, positions, punches, vocabulary } from "../data";

const technics = [kicks, defenses, punches]
const vocabularyFull = [...vocabulary, ...numbers, ...betls]

export const getRandomExercise = () => {
    const technic = technics[getRandomInt(0, technics.length)]
    return `${positions[getRandomInt(0, positions.length)]} ${levels[getRandomInt(0, levels.length)]
        } ${technic[getRandomInt(0, technic.length)]}`;
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


export const getRandomVocabulary = () => {
    const position = getRandomInt(0, 2);
    const world = vocabularyFull[getRandomInt(0, vocabularyFull.length)];
    const one = world[position];
    const two = world[position === 0 ? 1 : 0];
    return [one, two]
}

