function firstWord(str) {
    // if (str === '') {
    //     return str;
    // }

    // const spaceIndex = str.indexOf(' ');
    // return str.substring(0, spaceIndex);


	let result=str.trim();
	for (let i = 0; i < result.length; i++) {
		// let spaceIndex=result.indexOf(' ');
		if (result[i]!==' ') {
			let spaceIndex=result.indexOf(' ');
			return result.substring(0,spaceIndex);
		}
	}
	return '';
}

// Taking user input in a browser environment
const userInput = prompt('Enter a string:'); // This will prompt the user to enter a string
const result = firstWord(userInput);
alert(result);






