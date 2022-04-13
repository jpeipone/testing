//Janne Peiponen Javascript -perusteet, teht 1

var input = require("readline-sync");

var words = input.question("Kerro sana, ja tarkistan onko se palindromi:");

var xy = isitPalindrome(words);
function isitPalindrome(palin) {
  let m_long = palin.length;

  for (let i = 0; i < m_long; i++) {
    if (palin.charAt(i) != palin.charAt(m_long - 1 - i)) return false;
  }
  return true;
}
console.log(isitPalindrome(words));
if (xy) console.log("palindromi");
if (!xy) console.log("ei ole palindromi");
