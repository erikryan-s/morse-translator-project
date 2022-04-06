export const englishToMorse = (str, morseObj) => {
    if (!str || !morseObj) {
        // return alert
        throw new Error("Required");
    }
    return (
        str
            // morse is lowercase only
            .toLowerCase()
            // split with empty string
            .split("")
            .map((engElem) => {
                if (!morseObj[engElem]) {
                    return engElem;
                    // swap key >> object
                } else return morseObj[engElem];
            })
            // adding spaces between words
            .join(" ")
    );
};
