//1. Given [3, 7, 2, 9, 4], print the largest number using a loop (no Math.max). 

const nums = [3, 7, 2, 9,4];
let largest = nums[0];

for(let i=1; i<nums.length; i++){
    if( nums[i]> largest){
        largest = nums[i];
    }
}
console.log(largest);
