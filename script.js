function firstWord(s) {
  // Check if the string is empty or contains only whitespace
  if (!s.trim()) return '';

  // Match the first word
  const match = s.trim().match(/^\S+/);
  return match ? match[0] : '';
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
