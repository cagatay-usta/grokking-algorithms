// takes an array and the desired number as args and returns the index of its place. null if not found

function binarySearch(array, number) {
  let high = array.length - 1;
  let low = 0;

  while (high >= low) {
    let mid = Math.floor((high + low) / 2);
    let guess = array[mid];
    if (guess == number) return mid;
    if (guess < number) low = mid + 1;
    if (guess > number) high = mid - 1;
  }

  return null;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5], 4)); // 4
