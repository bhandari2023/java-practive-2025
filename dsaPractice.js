
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

