export const morseToEnglish = (str, engObj) => {
    if (!str || !engObj) {
        // return alert
        throw new Error("Required");
    }
    return (
        str
            // get word 3 spaces apart
            .split("  ")
            .map((morseElem) =>
                morseElem
                    // get word 1 space apart
                    .split(" ")
                    .map((char) => engObj[char])
                    .join(""),
            )
            // adding spaces between words
            .join(" ")
            // removes whitespace from both ends of the string
            .trim()
    );
};
