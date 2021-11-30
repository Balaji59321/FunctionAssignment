// Getting input via STDIN
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
  console.log('a. Print all the odd numbers in the array');
  console.log('*****************************');
  console.log("Input Array",userInput[0].split(' '));
function odd(arr){
let ans = [];
for(let i=0;i<arr.length;i++){
    if(+arr[i]%2!==0)
        ans.push(+arr[i]);
}
return ans.join(',');
}

console.log("Odd numbers of static array are => ",odd([9,8,7,6,5,4,3,2,1])); //=> static usage
console.log("Odd numbers of dynamic array are => ",odd(userInput[0].split(' '))); //dynamic binding of array based on user input

});
