function firstWord(str) {
    if (str === '' || !str.includes(' ')) {
        return str;
    }

    const spaceIndex = str.indexOf(' ');
    return str.substring(0, spaceIndex);
}

// Taking user input in a browser environment
const userInput = prompt('Enter a string:'); // This will prompt the user to enter a string
const result = firstWord(userInput);
alert(result);


