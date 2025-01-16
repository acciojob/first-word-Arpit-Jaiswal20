function firstWord(s) {
  // your code here
	if (!str.trim()) return ''; // Handle empty or whitespace-only strings

  // Remove leading spaces and capture the first word until a space or end of string
  const match = str.trim().match(/^\S+/);
  return match ? match[0] : str.trim();

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
