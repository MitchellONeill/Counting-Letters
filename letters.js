
function countLetters(str) {
  var charList = str.split("");
  var charMap = {};
  for (var i = 0; i < charList.length; i++) {
    if(charMap[charList[i]] === undefined) {
      charMap[charList[i]] = 1;
      } else {
       charMap[charList[i]] += 1;
    }
  }
  delete charMap[" "];
  return charMap;
}

console.log(countLetters("lighthouse in the house"));
