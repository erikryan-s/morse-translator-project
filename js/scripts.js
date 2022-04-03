import { morseCode } from "./modules/morseCode.js";
import { englishToMorse } from "./modules/englishToMorse.js";
import { morseToEnglish } from "./modules/morseToEnglish.js";
import { changeLang } from "./modules/changeLang.js";

// query selectors
const langOne = document.querySelector("#languageOne");
const langTwo = document.querySelector("#languageTwo");
const swap = document.querySelector("#swap");
const convertBtn = document.querySelector(".input__button");
const output = document.querySelector(".output");

// store swapped language
const swapLang = changeLang(morseCode);

// event listener to swap between languages
swap.addEventListener("click", () => {
    if (langOne.innerText === "English") {
        // if text in first box = english, switch to morse and vice versa
        langTwo.innerText = "English";
        langOne.innerText = "Morse";
    } else {
        langOne.innerText = "English";
        langTwo.innerText = "Morse";
    }
});

// event listener for text area
convertBtn.addEventListener("click", () => {
    // get value of text area
    let textArea = document.querySelector(".input__textarea").value;
    // if text area is left empty, show error
    if (textArea === "") {
        alert("empty input");
    } else {
        // if language selected is english
        if (langOne.innerText === "English") {
            // english to morse
            let convertedEng = englishToMorse(textArea, morseCode);

            output.textContent = convertedEng;
        } else {
            // check text area for morse code, if not, show alert
            if (/[^.\-/ ]/.test(textArea)) {
                alert("Please enter valid morse code");
            } else {
                // morse to english
                let convertedMorse = morseToEnglish(textArea, swapLang);
                output.textContent = convertedMorse;
            }
        }
    }
});
