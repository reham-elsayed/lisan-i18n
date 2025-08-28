
const dictionaryData = {
    en: {
        greeting: {
            morning: "Good morning",
            evening: "Good evening"
        },
        farewell: "Goodbye"
    },
    ar: {
        greeting: {
            morning: "صباح الخير",
            evening: "مساء الخير"
        },
        farewell: "مع السلامة"
    }
}
export function translate(dictionary, key, lang) {
    const keyParts = key.split('.');['greeting', "morning"]
    let temp; // Start with the language dictionary
    if (dictionary && dictionary.hasOwnProperty(lang)) {

        temp = dictionary[lang];
        console.log(temp)
    }
    for (let part of keyParts) {
        if (temp && temp.hasOwnProperty(part)) {
            temp = temp[part];
        } else {
            return key; // Return the key if any part is not found
        }
    }
    return temp

}
// Test Case 1: Testing a nested key
const expectedResult1 = "صباح الخير";
const actualResult1 = translate(dictionaryData, 'greeting.morning', 'ar');

if (actualResult1 === expectedResult1) {
    console.log("✅ Test 1 Passed! The translation for 'greeting.morning.magic' is correct.");
} else {
    console.error(`❌ Test 1 Failed. Expected '${expectedResult1}', but got '${actualResult1}'.`);
}

// Test Case 2: Testing a simple key
const expectedResult2 = "مع السلامة";
const actualResult2 = translate(dictionaryData, 'farewell', 'ar');

if (actualResult2 === expectedResult2) {
    console.log("✅ Test 2 Passed! The translation for 'farewell' is correct.");
} else {
    console.error(`❌ Test 2 Failed. Expected '${expectedResult2}', but got '${actualResult2}'.`);
}