// Exercise 3

function longest(string1, string2) {
if (string1.length === string2.length) {
  return "neither";
  } else if (string1.length > string2.length) {
  return string1;
  } else {
  return string2;
  }
}

console.log(longest("antidisestablishmentarianism", "cat"));
