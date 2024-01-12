Asynchronous and synchronous are terms used to describe the way in which tasks are executed in a programming language, and they are often discussed in the context of JavaScript.

1. Synchronous JavaScript:

In synchronous code, tasks are executed sequentially, one after the other.
  
Each task must complete before the next one starts.
  
If a task takes time to complete, the entire program will be blocked, and nothing else can happen during that time.
  
Synchronous code can be more straightforward to read and write, as the flow of execution is linear and predictable.

console.log('Task 1');
console.log('Task 2');
console.log('Task 3');
