//MEDIUM (2)
// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 

// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// 	  String 2: Dogs eat ants
// Output: False

let text = "So dark the con of man";
let text2 = "Madonna of the Rocks";

function anagrams (x,y){
    var stringX = x.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    var stringY = y.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');


if( stringX === stringY){
    console.log(true)
}
else{
    console.log(false)
}
}
console.log(anagrams(text,text2));
