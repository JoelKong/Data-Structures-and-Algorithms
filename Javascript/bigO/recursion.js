function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }
  return num + recursiveRange(num - 1);
}

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

function isPalindrome(str) {
  if (str.length <= 1) return str;
  if (isPalindrome(str.slice(1)) + str[0] === str) {
    return true;
  } else {
    return false;
  }
}
