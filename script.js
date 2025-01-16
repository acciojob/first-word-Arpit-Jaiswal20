function firstWord(s) {
  // your code here
	if (!str.trim()) return ''; 

 
  const match = str.trim().match(/^\S+/);
  return match ? match[0] : str.trim();

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
