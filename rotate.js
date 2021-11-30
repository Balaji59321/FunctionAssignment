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
  console.log('h. Rotate a array by k times');
  console.log('*****************************');

  
function rotate(arr,n){
    for(let i=0;i<n;i++){
    let last = arr[arr.length-1];
    for(let i=arr.length-1;i>=0;i--){
        arr[i]= arr[i-1];
    }
    arr[0]= last;
    }
    console.log(`Array after rotating ${n} times is ${arr}`);
}

rotate([1,2,3,4,1,2,'a','b','a'],2); // => static usage
rotate(userInput[0].split(','),3); //dynamic binding of array based on user input

});
