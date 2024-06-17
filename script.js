function firstWord(str) {
    // if (str === '') {
    //     return str;
    // }

    // const spaceIndex = str.indexOf(' ');
    // return str.substring(0, spaceIndex);


	// let trip=str.trim();
	
	// if (str.length==0) {
	// 	return '';
	// }
	// let result=str.indexOf(' ');
	// if (result==-1) {
	// 	return str;
	// }
	
	// return trip.substring(0,result);


	let trip=str.trim();
	for (let i = 0; i <trip.length; i++) {
		if (trip[i]!==' ') {
			let result=trip.indexOf(' ');
			return trip.substring(0,result);
		}
	}
	return ' ';
}

// Taking user input in a browser environment
const userInput = prompt('Enter a string:'); // This will prompt the user to enter a string
const result = firstWord(userInput);
alert(result);









