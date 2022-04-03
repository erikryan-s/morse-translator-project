export const changeLang = (objectToSwap) => {
    const langObject = {};
    // change for each key in the object
    Object.keys(objectToSwap).forEach((key) => {
        langObject[objectToSwap[key]] = key;
    });
    return langObject;
};
