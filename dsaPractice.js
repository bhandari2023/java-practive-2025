
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


console.log(countVowels("manyata")); // Output: 3


function countvowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;

        }

    }
    return count;
}

function sumOfTwoNumbers(a, b) {
    return a + b;

}
console.log(sumOfTwoNumbers(5, 10)); // Output: 15

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextNode = current.next; // Store next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to current
        current = nextNode; // Move to next node
    }

    return prev; // New head of the reversed list
}
// Example usage:
// Assuming the linked list is represented as an array for simplicity   


class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Convert array to linked list
let linkedList = arrayToLinkedList([5, 4, 3, 2, 1]);

// Reverse the linked list
let reversedList = reverseLinkedList(linkedList);

// Helper function to print the linked list
function printLinkedList(head) {
    let result = [];
    while (head) {
        result.push(head.value);
        head = head.next;
    }
    return result;
}

// Print the reversed linked list as an array
console.log(printLinkedList(reversedList)); // Output: [3, 2, 1]


function countVovelsConsonants(str) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
        }
    }
    return { vowelCount, consonantCount };
}

console.log(countVovelsConsonants("manyata")); // Output: {vowelCount: 3, consonantCount: 4}
console.log(countVovelsConsonants("Hello World")); // Output: {vowelCount: 3, consonantCount: 7}        

function checkStringsAreAnagrams(str1, str2) {// Function to check if two strings are anagrams// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
    str1 = str1.replace(/\s+/g, '').toLowerCase(); // Remove spaces and convert to lowercase
    if (str1.length !== str2.length) return false;// If lengths are different, they can't be anagrams

    const charCount = {};// Object to store character counts
    // Initialize character count for str1
    for (let char of str1) {// Loop through str1
        charCount[char] = (charCount[char] || 0) + 1;// Count characters in str1
    }// Initialize character count for str2

    for (let char of str2) {// Loop through str2
        if (!charCount[char]) return false;// If char not in str1, return false
        // If char is in str1, decrease the count
        charCount[char]--;// Decrease count for each character in str2
    }

    return true;
}
// Example usage:
console.log(checkStringsAreAnagrams("listen", "silent")); // Output: true   
console.log(checkStringsAreAnagrams("hello", "world")); // Output: false

console.log(checkStringsAreAnagrams("evil", "vile")); // Output: true
console.log(checkStringsAreAnagrams("evil", "live")); // Output: true
console.log(checkStringsAreAnagrams("evil", "vill")); // Output: false

function findMissingNumber(arr) {
    const n = arr.length + 1; // Length of the array + 1 for the missing number
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers using the formula n(n+1)/2 
    const actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of elements in the array

    return expectedSum - actualSum; // The missing number is the difference between expected and actual sum
}
// Example usage:   
console.log(findMissingNumber([1, 2, 3, 5,])); // Output: 4
// Example of recursion to calculate factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    }
    return n * factorial(n - 1); // Recursive case
// Example of recursion to calculate the nth Fibonacci number

}
// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
console.log(factorial(0)); // Output: 1


function fibonacci(n) {// Function to calculate the nth Fibonacci number using recursion
    // The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. // The sequence typically starts: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...  
    if (n === 0) {
        return 0; // Base case: Fibonacci of 0 is 0
    }
    if (n === 1) {
        return 1; // Base case: Fibonacci of 1 is 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case: Fibonacci of n is the sum of Fibonacci of (n-1) and (n-2)   // This is a classic example of recursion, where the function calls itself with smaller values of n until it reaches the base cases. 
}

// Example usage:
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1             
console.log(fibonacci(2)); // Output: 1     
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(4)); // Output: 3 
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(6)); 
// Output: 8
console.log(fibonacci(7)); // Output: 13            
console.log(fibonacci(8)); // Output: 21    
console.log(fibonacci(9)); // Output: 34
console.log(fibonacci(10)); // Output: 55

console.log(fibonacci(11)); // Output: 89
console.log(fibonacci(12)); // Output: 144