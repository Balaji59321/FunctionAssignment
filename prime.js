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
  console.log('d. Return all prime numbers in an array');
  console.log('*****************************');
  console.log("Input Array",userInput[0].split(' '));
  
function prime(arr){
let flag=0;
let ans = [];
for(let i=0;i<arr.length;i++)
{
    flag=0;
    for(let j=2;j<=10;j++){
        if(+arr[i]%j===0 && +arr[i]!==j){
            flag=1;
            break;
        }
    }
    if(flag ===0){
        ans.push(+arr[i]);
    }
    
}
return ans;
}

console.log("Prime numbers of static array is => ",prime([1,2,3,4,5,6,7,8,9,10])); // => static usage
console.log("Prime numbers of dynamic array is => ",prime(userInput[0].split(','))); //dynamic binding of array based on user input

});
