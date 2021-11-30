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
  console.log('f. Return median of two sorted arrays of same size');
  console.log('*****************************');
  console.log("Input Array",userInput[0].split(','),userInput[1].split(','));
  
function median(arr1,arr2){
let flag=0;
let ans = 0;
arr2 = (arr2.concat(arr1).sort((a,b)=> a-b));
if(arr2.length%2===0){
 ans = ((+arr2[(arr2.length/2)-1]) + (+arr2[arr2.length/2]))/2;
}
else{
    ans = arr2[Math.floor(arr2.length/2)];
}
return ans;
}

console.log("Median of static array is => ",median([1,2,3,4,5],[7,8,9,10])); // => static usage
console.log("Median of dynamic array is => ",median(userInput[0].split(','),userInput[1].split(','))); //dynamic binding of array based on user input

});
