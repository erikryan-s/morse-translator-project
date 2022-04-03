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
        return str.toLowerCase().split("").map(engCharToMorse).join(" ");
    }
};
