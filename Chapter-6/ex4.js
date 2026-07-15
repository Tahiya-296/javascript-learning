// 4. Use reduce to count how many numbers in an array are even. 

const nums = [3, 8, 6, 1, 10, 5];

const evenCount = nums.reduce((count, num) => {
    if (num % 2 === 0) {
        return count + 1;
    }
    return count;
}, 0);

console.log(evenCount); //3
