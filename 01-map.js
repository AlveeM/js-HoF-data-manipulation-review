const inputArray = [1, 2, 3];

function operationToElements(array, myFunc) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray.push(myFunc(array[i]));
  }
  return resultArray;
}

function addBy1(num) {
  return num + 1;
}

function mulBy10(num) {
  return num * 10;
}

// console.log(operationToElements(inputArray, addBy1));
// console.log(operationToElements(inputArray, mulBy10));

// console.log(inputArray.map(addBy1));

const result = inputArray.map(function addByOne(num) {
  return num + 1;
})

const result2 = inputArray.map((num) => num + 1);




const nums = [5, 10, 15] // [0, 1, 2]

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//   // return element for newArray, after executing something
// }[, thisArg]);

const result3 = nums.map(function (currentValue, index) {
  return index;
})

console.log(result3);


const result4 = inputArray.map(function(currentValue) {
  return `The value is ${currentValue}`
})

console.log(result4);