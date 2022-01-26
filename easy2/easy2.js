//EASY (2)
//Create a function that checks an array for prime numbers then inserts any pimes into a new array.  

// Example 1:                                                                                                                                       Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]


// Example 2:
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83]
// Output: primeArray = [19 ,29 ,47 , 83]

var numArray = [1,2,10,18,19,29,33,35,47,66,83]
var primeArray = []
function primeNums(nums=[]){
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] ===2 && nums[i]!= 1) {
         
          primeArray.push(nums[i])
        } 
        else if (nums[i] %2!=0 && nums[i]!= 1){
         
              primeArray.push(nums[i])
          }

        }

      }
primeNums(numArray)
console.log(primeArray)

