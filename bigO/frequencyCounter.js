function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    if (lookup[letter]) {
      lookup[letter] += 1;
    }
    lookup[letter] = 1;
  }

  for (let i = 0; i < str1.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    }
    lookup[letter] -= 1;
  }
  return true;
}

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

[1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
