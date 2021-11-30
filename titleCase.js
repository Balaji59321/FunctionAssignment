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
  console.log('b. Convert all the strings to title caps in a string array');
  console.log('*****************************');
  console.log("Input Array",userInput[0].split(' '));
  
function titleCase(arr){
let ans = [];
for(let i=0;i<arr.length;i++){
    ans.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
}
return ans.join(' ');
}

console.log("Title caps of static array are => ",titleCase('static array value is i am writing code in guvi portal using ide'.split(' '))); // => static usage
console.log("Title caps of dynamic array are => ",titleCase(userInput[0].split(' '))); //dynamic binding of array based on user input

});
