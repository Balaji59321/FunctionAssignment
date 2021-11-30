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
  console.log('g.Remove duplicates from the array');
  console.log('*****************************');
//   console.log("Input Array",userInput[0].split(','),userInput[1].split(','));
  
function dup(arr){
let ans=[];

for(let i=0;i<arr.length;i++){
    if(ans.indexOf(arr[i]) === -1){
        ans.push(arr[i]);
    }
}
return ans;
}

console.log("After Removing duplicate of static array is => ",dup([1,2,3,4,1,2,'a','b','a'])); // => static usage
console.log("After Removing duplicate of dynamic array is => ",dup(userInput[0].split(','))); //dynamic binding of array based on user input

});
