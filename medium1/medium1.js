//MEDIUM (1)
// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel

// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’

// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’


const vowels =['a','e','i','o','u'];

function vowelChecker(x){
    if (vowels.includes(x)){
        console.log(x +" This is a vowel");
    }
    else{
        console.log(x +" This is not a vowel");
    }
}
console.log(vowelChecker('a'));

