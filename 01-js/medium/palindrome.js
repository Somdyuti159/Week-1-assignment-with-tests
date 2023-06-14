/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  var n=str.length;
  var str1="";
  for(var i=0;i<n;i++){
    var ch=str.charAt(i);
    var asci=ch.charCodeAt(0);
    if(asci>=97 && asci<=122){
      str1+=str.charAt(i);
    }
  }
  var n1=str1.length;
  for(let i=0;i<n1/2;i++){
    if(str1.charAt(i)!=str1.charAt(n1-i-1)){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
