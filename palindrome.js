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
  console.log('e. Return all palindromes in an array');
  console.log('*****************************');
  console.log("Input Array",userInput[0].split(' '));
  
function palindrome(arr){
let flag=0;
let ans = [];
for(let i=0;i<arr.length;i++)
{
  if(arr[i] === arr[i].split('').reverse().join('')){
      ans.push(arr[i]);
  }
}
return ans;
}

console.log("Palindrome of static array is => ",palindrome(['liril','racecar','balaji','javascript','madam','test'])); // => static usage
console.log("Palindrome of dynamic array is => ",palindrome(userInput[0].split(','))); //dynamic binding of array based on user input

});
