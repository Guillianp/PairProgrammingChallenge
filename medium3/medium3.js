//MEDIUM (3)
//Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 
 
//Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24

// //Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6

function gdc_two_numbers (num1,num2){
    if (num1 == 0)
        return num2;

    if (num2 == 0)
        return num1;
 
    if (num1 == num2)
        return num1;
 
    if (num1 > num2)
        return gdc_two_numbers(num1-num2, num2);
    
    if (num1 < num2)
        return gdc_two_numbers(num1, num2-num1);
}
console.log(gdc_two_numbers(4,8));





