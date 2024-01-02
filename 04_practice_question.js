let [x, ...y] = [1,2,3,4,5]

console.log(y[x]);

// explaination

// Array Destructuring:

// [x, ...y] is an example of array destructuring in JavaScript.
// It assigns the first element of the array to the variable x, and the rest of the elements to an array called y. The ... is the spread/rest syntax that allows you to gather the remaining elements into an array.
// Array Initialization:

// The array on the right side of the assignment [1, 2, 3, 4, 5] contains five elements.
// Destructuring Assignment:

// x is assigned the value of the first element of the array, which is 1.
// y is assigned an array containing the rest of the elements, [2, 3, 4, 5].
// Console Log:

// console.log(y[x]) is then executed.
// y[x] accesses the element at the index specified by the value of x in the array y.
// Result:

// In this case, x is 1, so it's equivalent to y[1].
// The element at index 1 in the array y is 3.
// Therefore, the code will log 3 to the console.
