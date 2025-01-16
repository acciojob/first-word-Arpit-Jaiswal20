function firstWord(s) {
  // your code here
	const words = str.trim().split(/\s+/); // Split by whitespace and remove extra spaces
  return words.length > 0 ? words[0] : '';

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
