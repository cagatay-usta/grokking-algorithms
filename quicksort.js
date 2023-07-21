function quicksort(array) {
  // base case
  if (array.length < 2) return array;
  const pivot = array[0];
  const less = array.slice(1).filter((item) => item <= pivot);
  const more = array.slice(1).filter((item) => item > pivot);
  return [...quicksort(less), pivot, ...quicksort(more)];
}

console.log(quicksort([2, 7, 3, 11, 222, 9])); // [ 2, 3, 7, 9, 11, 222 ]
