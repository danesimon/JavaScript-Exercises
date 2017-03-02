// // Exercise 4

function isVowel(character) {
  var vowel = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  if (vowel.indexOf(character) > -1) {
  return true;
  } else {
  return false;
  }
}

console.log(isVowel("A"));
