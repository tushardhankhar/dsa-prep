// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true




//(O(n log n))
// 2 Pointers method

var containsDuplicate = function (nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1
        if (nums[i] === nums[j]) return true;
    }
    return false;
};


// Using set  O(n) time / O(n) space

var containsDuplicate = function (nums) {
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};


// Using map 

var containsDuplicate = function (nums) {
    let seen = {}
    for (let num of nums) {
        if (seen[num]) return true;
        seen[num] = true;
    }
    return false;
};