/*
You have array of number find the index of the given target if target is not in the list return -1

With Arrow a function 

Here is some test with target
*/
const linearSearch = (arr,target) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == target) {
      return i;
    }
  }
  return -1;
} 



//test1 = []
 test2 = [1,2,3,4,5]
// test3 = [9,8,7,6,5]
// test4 = [2]

//target1 = 2
 target2 = 4
// target3 = 5
// target4 = 2

const result = linearSearch(test2,target2);

console.log("Element found at index is %d ", result);