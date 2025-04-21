function stringMethods() {
    // String methods
    const str = "Hello World";
    console.log(str.length); // Length of the string
    console.log(str.charAt(0)); // Character at index 0
    console.log(str.indexOf("o")); // Index of first occurrence of 'o'
    console.log(str.lastIndexOf("o")); // Index of last occurrence of 'o'
    console.log(str.substring(0, 5)); // Substring from index 0 to 5
    console.log(str.slice(0, 5)); // Slice from index 0 to 5
    console.log(str.replace("World", "javascript")); // Replace 'World' with 'JavaScript'
    console.log(str.toUpperCase()); // Convert to uppercase
    console.log(str.toLowerCase()); // Convert to lowercase
    console.log(str.split(" ")); // Split string into array by space
}

stringMethods();


function arrayMethods() {
    // Array methods
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.length); // Length of the array
    console.log(arr.push(6)); // Add element to the end of the array
    console.log(arr.pop()); // Remove last element from the array
    console.log(arr.shift()); // Remove first element from the array
    console.log(arr.unshift(0)); // Add element to the beginning of the array
    console.log(arr.concat([7, 8])); // Concatenate two arrays
    console.log(arr.join("-")); // Join array elements into a string with '-'
    console.log(arr.indexOf(3)); // Index of first occurrence of 3
    console.log(arr.includes(4)); // Check if 4 is in the array
    console.log(arr.slice(1, 4)); // Slice array from index 1 to 4
    console.log(arr.splice(1, 2)); // Remove 2 elements from index 1
    console.log(arr.sort()); // Sort array
    console.log(arr.reverse()); // Reverse array
}
arrayMethods();

function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {
        // Only start counting if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            maxLength = Math.max(maxLength, currentStreak);
        }
    }

    return maxLength;
}


console.log(longestConsecutive([1, 2, 3, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [5, 6, 7, 8]

function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, 1); // Base case: sum 0 occurs once

    let count = 0;
    let sum = 0;

    for (let num of nums) {
        sum += num;

        // Check if there is a prefix sum that satisfies sum - k
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        // Update map with the current sum
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}
console.log(subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // Output: 2



