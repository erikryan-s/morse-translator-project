import { englishToMorse } from "../js/modules/englishToMorse";
import { morseToEnglish } from "../js/modules/morseToEnglish";
import { morseCode } from "../js/modules/dictionary";
import { englishCode } from "../js/modules/dictionary";

const emptyFieldError = new Error("Field cannot be empty");

describe("Test englishToMorse()", () => {
    it("should return valid morse code", () => {
        expect(englishToMorse("m", morseCode)).toMatch("--");
        expect(englishToMorse("hello there", morseCode)).toBe(
            ".... . .-.. .-.. --- / - .... . .-. .",
        );
    });

    it("should handle special characters", () => {
        expect(englishToMorse("!", morseCode)).toBe("-.-.--");
        expect(englishToMorse("?", morseCode)).toBe("..--..");
        expect(englishToMorse("&", morseCode)).toBe(".-...");
        expect(englishToMorse("@", morseCode)).toBe(".--.-.");
    });

    it("should handle numbers", () => {
        expect(englishToMorse("0", morseCode)).toBe("-----");
        expect(englishToMorse("5", morseCode)).toBe(".....");
        expect(englishToMorse("9", morseCode)).toBe("----.");
    });

    it("should throw an error if str is empty", () => {
        expect(() => englishToMorse("")).toThrow(emptyFieldError);
    });
});

describe("Test morseToEnglish()", () => {
    it("should return a valid string", () => {
        expect(morseToEnglish("... --- ...", englishCode)).toBe("sos");
        expect(morseToEnglish("--", englishCode)).toBe("m");
    });

    it("should handle special characters", () => {
        expect(morseToEnglish("-.-.--", englishCode)).toBe("!");
        expect(morseToEnglish("..--..", englishCode)).toBe("?");
        expect(morseToEnglish(".-...", englishCode)).toBe("&");
        expect(morseToEnglish(".--.-.", englishCode)).toBe("@");
    });

    it("should handle numbers", () => {
        expect(morseToEnglish("-----", englishCode)).toBe("0");
        expect(morseToEnglish(".....", englishCode)).toBe("5");
        expect(morseToEnglish("----.", englishCode)).toBe("9");
    });

    it("should throw an error if str is empty", () => {
        expect(() => englishToMorse("")).toThrow(emptyFieldError);
    });
});
