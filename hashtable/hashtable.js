//hash functions for strings ONLY (basic)
//not constant time
//could be more random
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

//faster, more random because prime numbers and especially if you use a prime number for the arrayLen, still a bad hash function
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + WEIRD_PRIME + value) & arrayLen;
  }
  return total;
}
