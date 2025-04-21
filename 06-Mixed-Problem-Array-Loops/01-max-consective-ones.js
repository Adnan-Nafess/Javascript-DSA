// Problem: Find the maximum number of consecutive 1s in a binary array

var findMaxConsecutiveOnes = function(nums) {
    let finalAns = 0; // Stores max count of 1s
    let consecutiveOnes = 0; // Current streak

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            consecutiveOnes++;
        } else {
            finalAns = Math.max(finalAns, consecutiveOnes);
            consecutiveOnes = 0; // Reset the streak when 0 is found
        }
    }

    // Final check in case the array ends with 1s
    return Math.max(finalAns, consecutiveOnes);
};

// Test Case
const nums = [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1];
const result = findMaxConsecutiveOnes(nums);
console.log("Maximum Consecutive 1s:", result); // Output: 3
