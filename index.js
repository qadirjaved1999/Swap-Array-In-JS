console.log("How to Reverse Array Using Swapping In Js.......!");
console.log("*************************************************");

const reverseArray = (originalArray) => {
  console.log(myArray); // Calling The Original Array

  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;

  while (leftIndex < rightIndex) {
    // Swap Element
    let temp = originalArray[leftIndex];

    originalArray[leftIndex] = originalArray[rightIndex];

    originalArray[rightIndex] = temp;

    // Move Indexes
    leftIndex++;
    rightIndex--;
  }
};

let myArray = [1, 2, 3, 4, 5, 6, 7];

reverseArray(myArray); // Calling The Function

console.log(myArray); // Show Output
