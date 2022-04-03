export const morseToEnglish = (str, engObj) => {
    if (!str || !engObj) {
        // return alert
        throw new Error("Required");
    }
    return (
        str
            .split("  ")
            .map((morseElem) =>
                morseElem
                    // character code 1 space apart
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
