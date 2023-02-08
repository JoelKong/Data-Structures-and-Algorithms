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

hash("pink");
