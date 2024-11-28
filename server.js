/*
Function of JavaScript
*/

const addOne = (num) => {
  return num + 1;
}

// function addOne(num) {
//   return num + 1;
// }

const arr = [4, 5, 6, 7, 8];

for (let i = 0; i < arr.length; i++)
{
  arr[i] = addOne(arr[i]);
}

console.log(arr);