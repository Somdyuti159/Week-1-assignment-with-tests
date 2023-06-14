/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var n1=str1.length;
  var n2=str2.length;
  
  if(n1!=n2) {
    return false;
  }
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  arr1.sort();
  arr2.sort();
  
  for(var i=0;i<n1;i++){
    if(arr1[i]!=arr2[i]){
      return false;
    }
  }
  return true;
}
// var ans=isAnagram("somds","pomss");
// console.log(ans);

module.exports = isAnagram;
