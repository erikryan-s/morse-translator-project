import { englishToMorse } from "../modules/englishToMorse";
import { morseToEnglish } from "../modules/morseToEnglish";
import { morseCode } from "../modules/morseCode";

describe("Test englishToMorse()", () => {
    const emptyFieldError = new Error("Field cannot be empty");

    it("should return valid morse code", () => {
        expect(englishToMorse("h", morseCode)).toBe("....");
        expect(englishToMorse("hello there", morseCode)).toBe(
            ".... . .-.. .-.. --- / - .... . .-. .",
        );
        expect(englishToMorse("this is a sentence.", morseCode)).toBe(
            "- .... .. ... / .. ... / .- / ... . -. - . -. -.-. . .-.-.-",
        );
        expect(englishToMorse("$&Q79@HJD@34090", morseCode)).toBe(
            "...-..- .-... --.- --... ----. .--.-. .... .--- -.. .--.-. ...-- ....- ----- ----. -----",
        );
        expect(englishToMorse("tHi$ doseSnt nmaek sen0sc", morseCode)).toBe(
            "- .... .. ...-..- / -.. --- ... . ... -. - / -. -- .- . -.- / ... . -. ----- ... -.-.",
        );
    });

    it("should throw an error if str is empty", () => {
        expect(() => englishToMorse("")).toThrow(emptyFieldError);
    });
});

describe("Test morseToEnglish()", () => {
    const emptyFieldError = new Error("Field cannot be empty");

    it("should return valid characters", () => {
        expect(morseToEnglish(".-")).toBe("a");
        expect(morseToEnglish(".... . .-.. .-.. --- / - .... . .-. .")).toBe(
            "hello there",
        );
        expect(
            morseToEnglish(
                "- .... .. ... / .. ... / .- / ... . -. - . -. -.-. . .-.-.-",
            ),
        ).toBe("this is a sentence.");
        expect(
            morseToEnglish(
                "...-..- .-... --.- --... ----. .--.-. .... .--- -.. .--.-. ...-- ....- ----- ----. -----",
            ),
        ).toBe("$&Q79@HJD@34090");
        expect(
            morseToEnglish(
                "- .... .. ...-..- / -.. --- ... . ... -. - / -. -- .- . -.- / ... . -. ----- ... -.-.",
            ),
        ).toBe("tHi$ doseSnt nmaek sen0sc");
    });

    it("should throw an error if str is empty", () => {
        expect(() => englishToMorse("")).toThrow(emptyFieldError);
    });
});
