// Anonymous Function
const sumArray = (arr) => {
  return arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
};


const sum = (function (arr) {
  return arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
})([1, 2, 3, 4, 5]);
console.log(sum);

// Anonymous Function
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeNumbers = (arr) => {
  return arr.filter(function (num) {
    return isPrime(num);
  });
};

// IIFE
const primeNumbers = (function (arr) {
  return arr.filter(function (num) {
    return isPrime(num);
  });
})([2, 3, 4, 5, 6, 7]);
console.log(primeNumbers);


// Anonymous Function
const isPalindrome = (str) => {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
};

const getPalindromes = (arr) => {
  return arr.filter(function (str) {
    return isPalindrome(str);
  });
};

// IIFE
const palindromes = (function (arr) {
  return arr.filter(function (str) {
    return isPalindrome(str);
  });
})(['level', 'hello', 'deified']);
console.log(palindromes);

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

const convertToTitleCase = (strArray) => {
  return strArray.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
};

const sumArray = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
};

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeNumbers = (arr) => {
  return arr.filter((num) => isPrime(num));
};

const isPalindrome = (str) => {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
};

const getPalindromes = (arr) => {
  return arr.filter((str) => isPalindrome(str));
};

// Anonymous Function
const findMedianSortedArrays = (arr1, arr2) => {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const length = mergedArray.length;
  if (length % 2 === 0) {
    return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
  } else {
    return mergedArray[Math.floor(length / 2)];
  }
};

// IIFE
const median = (function (arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const length = mergedArray.length;
  if (length % 2 === 0) {
    return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
  } else {
    return mergedArray[Math.floor(length / 2)];
  }
})([1, 3], [2, 4]);
console.log(median);

