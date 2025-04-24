
var intersection = function(nums1, nums2) {
    // Step 1: Create frequency map for nums1
    let freqNums1 = {};
    for (let i = 0; i < nums1.length; i++) {
        let element = nums1[i];
        if (freqNums1[element]) {
            freqNums1[element]++;
        } else {
            freqNums1[element] = 1;
        }
    }

    // Step 2: Traverse nums2 and check if element exists in freqNums1
    let freqNums2 = {};
    for (let i = 0; i < nums2.length; i++) {
        let element = nums2[i];
        if (freqNums1[element]) {
            freqNums2[element] = 1; // store unique match
        }
    }

    // Step 3: Return unique keys of freqNums2 as result
    return Object.keys(freqNums2).map(Number); // convert string keys to numbers
};

// ✅ Test Case
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log("Intersection:", intersection(nums1, nums2)); // Output: [2]
