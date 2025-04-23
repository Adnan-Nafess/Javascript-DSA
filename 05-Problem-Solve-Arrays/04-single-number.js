// 🔎 Find the single number in an array where every other number appears twice

var singleNumber = function(nums) {
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        result ^= nums[i]; // XOR operation
    }
    return result;
};

// ✅ Test Case
const nums = [4, 1, 2, 1, 2];
console.log("Single Number is:", singleNumber(nums)); // Output: 4
