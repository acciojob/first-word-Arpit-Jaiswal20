function firstWord(s) {
  // Check if the string is empty or contains only whitespace
let word = '';
  let i = 0;
  
  // Skip leading spaces
  while (i < s.length && s[i] === ' ') i++;

  // Collect characters until a space is found
  while (i < s.length && s[i] !== ' ') {
    word += s[i];
    i++;
  }

  return word;
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
