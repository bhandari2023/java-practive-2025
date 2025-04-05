// function reverseArray(arr) {
//     let result = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       result.push(arr[i]);
//     }
//     return result;
//   }
  
//   console.log(reverseArray([1, 2, 3, 4, 5]));


 function sumOfTwoNumbers(a, b) {
    return a + b;
  }

  console.log(sumOfTwoNumbers(5, 10)); // Output: 15

  function differenceOfTwoNumbers(a, b) {
    return a - b;
  }
  console.log(differenceOfTwoNumbers(10, 5)); // Output: 

  function multiplicationOfTwoNumbers(a, b) {
    return a * b;
  }
  console.log(multiplicationOfTwoNumbers(5, 10)); // Output: 50

  function evenOrOdd(number){
    if(number%2 == 0){
        return "even"   
  }else{
        return "odd"
    }
  } 
    console.log(evenOrOdd(10)); // Output: even

function primeOrNot(number){
    if(number == 1){
        return "not prime"
    } else if(number == 2){
        console.log(number+ "is prime")
        return "number is prime";

    } else{ 
        for(let i = 2; i < number; i++){
            if(number % i == 0){
                return "not prime"
            }
        }
        return "number is prime"
    }
}
console.log(primeOrNot(2)); // Output: number is prime
console.log(primeOrNot(4)); // Output: not prime            
console.log(primeOrNot(97)); 

function sumArray(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5])); // Output: 15

function primeNumInRange(start, end){
    let primeNumbers = [];
    for(let i = start; i <= end; i++){
        if(primeOrNot(i) == "number is prime"){
            primeNumbers.push(i)
        }
    }
    return primeNumbers;    
}
console.log(primeNumInRange(1, 10)); // Output: [2, 3, 5, 7]
console.log(primeNumInRange(10, 99)); // Output: [11, 13, 17, 19]