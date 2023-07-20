
// returns index of the smallest item
function findSmallest(array) {
  let smallest = array[0];
  let smallest_index = 0;
  for (let i = 1; i < array.length; i++) {
    if (smallest > array[i]) {
      smallest = array[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

// sorts the items from smallest to largest. takes O(n^2) time.
function selectionSort(array) {
  const newList = [];
  while (array.length) {
    let smallest = findSmallest(array);
    newList.push(array.splice(smallest, 1));
  }
  return newList.flat();
}

console.log(selectionSort([7, 11, 2, 13, 9, 222])); // [ 2, 7, 9, 11, 13, 222 ]
