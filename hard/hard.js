// HARD (1)
// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets 
// ({}, [], ()). These brackets must be nested appropriately in order to return a true value

// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True

// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False

var string1 = "{hello world}"; 
var string2 = "{hello world]";

function brackets(str){
    if(str[0] === "{" && str[str.length - 1] === "}"){
        return true;
    }else if(str[0] === "[" && str[str.length - 1] === "]"){
        return true;
    }else if(str[0] === "(" && str[str.length - 1] === ")"){
        return true;
    }else{
       return false;
    }
}



console.log(brackets(string1));
console.log(brackets(string2));



