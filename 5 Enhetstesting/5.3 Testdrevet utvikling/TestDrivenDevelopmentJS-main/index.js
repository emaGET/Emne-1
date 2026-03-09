function convertToRobberLanguage(text) {
    if(!text) return '';
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        const letterLower = letter.toLowerCase();
        const isConsonant = 'bcdfghjklmnpqrstvwxz'.includes(letterLower);
        let newTextPart = isConsonant ? letter + 'o' + letterLower : letter;
        if (isAcronym(i, text)) {
            newTextPart = newTextPart.toUpperCase();
        }
        result += newTextPart;
    }
    return result;
}

function isAcronym(index, text) {
    const letter = text[index];
    if (!isUpperCase(letter)) return false;
    if (index - 1 >= 0) {
        const previousLetter = text[index - 1];
        if (isUpperCase(previousLetter)) {
            return true;
        }
    }
    if (index + 1 < text.length) {
        const nextLetter = text[index + 1];
        if (isUpperCase(nextLetter)) {
            return true;
        }
    }
    return false;
}

function isUpperCase(text){
    return text == text.toUpperCase();
}