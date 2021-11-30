const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  console.log('*****************************');
  console.log('c. Sum of all numbers in an array');
  console.log('*****************************');
  console.log("Input Array",userInput[0].split(' '));
  
function sum(arr){
let ans = 0;
for(let i=0;i<arr.length;i++){
    ans = ans+ (+arr[i]);
}
return ans;
}

console.log("Sum of static array is => ",sum([1,2,3,4,5,6,7,8,9,10])); // => static usage
console.log("Sum of dynamic array is => ",sum(userInput[0].split(' '))); //dynamic binding of array based on user input

});
