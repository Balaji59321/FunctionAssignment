// // print odd numbers in the array
console.log('*****************************');
console.log('a. Print all the odd numbers in the array');

let a = [1,2,3,4,5,6,7,8,9,10];
let temp = [];
for(let i=0;i<a.length;i++){
    if(a[i]%2!==0){
        temp.push(a[i]);
    }
}
console.log(temp.join(','));

console.log('*****************************');
console.log('b. Convert all the strings to title caps in a string array');
let sen = 'i am writing code in guvi portal using ide';
let fin = sen.split(' ');
let answer = [];
// console.log(fin);
for(let i=0;i<fin.length;i++){
    answer.push(fin[i].charAt(0).toUpperCase()+fin[i].slice(1));
}
console.log("After title case conversion ==>",answer.join(' '));

console.log('*****************************');
console.log('c. Sum of all numbers in an array');
console.log('Sum of all elements in the array',a.reduce((acc,val)=> acc+val));

console.log('*****************************');
console.log('d. Return all prime numbers in an array');
let flag=0;
let ans = [];
for(let i=0;i<a.length;i++)
{
    flag=0;
    for(let j=2;j<=10;j++){
        if(a[i]%j==0 && a[i]!==j){
            flag=1;
            break;
        }
    }
    if(flag ===0){
        ans.push(a[i]);
    }
    
}
console.log(ans);


console.log('*****************************');
console.log('e. Return all palindromes in an array');
let pal = ['liril','racecar','balaji','javascript','guvi','test'];
let pal_ans = [];
for(let i=0;i<pal.length;i++){
    if(pal[i] === pal[i].split('').reverse().join('')){
        pal_ans.push(pal[i]);
    }
}
console.log(pal_ans)
console.log("Palindrome strings in the array are",pal_ans);

console.log('*****************************');
console.log('f. Return median of two sorted arrays of same size');
let med_1 = [1,2,3,4,5];
let med_2 = [7,8,9,10,11];
let sum1=0;
let sum2=0;
med_1 = med_1.concat(med_2).sort((a,b)=> {return a-b});
console.log("Combined Array ==>",med_1);
sum1 = sum1 + med_1.reduce((acc,val)=> acc+val);
if(med_1.length %2===0)
console.log("Median is ==>",(med_1[med_1.length/2-1]+med_1[med_1.length/2])/2);


console.log('*****************************');
console.log('g.Remove duplicates from the array');

let arr1= ['a',1,'b',2,'c',3,'c',1];
let temp1 = [];
for(let i=0;i<arr1.length;i++){
    if(temp1.indexOf(arr1[i])=== -1){
        temp1.push(arr1[i]);
    }
}
console.log(temp1);

console.log('*****************************');
console.log('h. Rotate a array by k times');

function test(arr,n){
    for(let i=0;i<n;i++){
    let last = arr[arr.length-1];
    for(let i=arr.length-1;i>=0;i--){
        arr[i]= arr[i-1];
    }
    arr[0]= last;
    }
    console.log(`Array after rotating ${n} times is ${arr}`);
}

var arr = [1,2,3,4,5];
console.log("Input Array is ",arr)
var fn = test(arr,2);
console.log('*****************************');
