const array = [1, 2, 3];

function callFuncOnEachElement(inputArray, myFunc) {
  for (let i = 0; i < inputArray.length; i++) {
    myFunc(inputArray[i]);
  }
}

// array.forEach((currentValue, index) => console.log(currentValue, index))

function displayElement(element) {
  console.log(element);
}

array.forEach(displayElement);

for (let element of array) {
  displayElement(element);
}