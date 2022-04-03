import { morseCode } from "./morseCode.js";

const engCharToMorse = (char) => {
    if (!morseCode[char]) {
        return char;
    } else return morseCode[char];
};

export const englishToMorse = (str) => {
    if (!str) {
        // return alert
        throw new Error("INVALID CHARACTER");
    } else {
        return (
            str
                // morse is lowercase only
                .toLowerCase()
                // split with empty space
                .split("")
                // map through characters, replace each english character with its morse counterpart
                .map(engCharToMorse)
                // adding spaces between words
                .join(" ")
        );
    }
};
