const nums = [1, 2, 3, 4, 5]; // [4, 5]

function filterArray(inputArray, myFunc) {
  const result = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (myFunc(inputArray[i])) {
      result.push(inputArray[i]);
    }
  }
  return result;
}

function isGreaterThan3(num) {
  return num > 3;
}

// console.log(isGreaterThan3(2)); // false 
// console.log(isGreaterThan3(4)); // true

function isLessOrEqual3(num) {
  return num <= 3;
}


// const filteredArray = filterArray(nums);

const result1 = filterArray(nums, isGreaterThan3);
const result2 = filterArray(nums, isLessOrEqual3);

console.log(result1);
console.log(result2);


const result3 = nums.filter(isGreaterThan3);
const result4 = nums.filter(isLessOrEqual3);

console.log(result3);
console.log(result4);


const result5 = nums.filter(function isGreaterThanThree(num) {
  return num > 3;
})

const result6 = nums.filter((num) => num > 3);


const stringArray = ["Hello", "Hi", "Sup"];

const strRes1 = stringArray.filter((word) => {
  return word.length <= 3;
})

console.log(strRes1);