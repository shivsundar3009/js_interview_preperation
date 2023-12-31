Certainly! In JavaScript, `let`, `var`, and `const` are used to declare variables, but they have some differences in terms of scope, hoisting, and mutability:

1. Scope:
   - `var` Variables declared with `var` are function-scoped, meaning they are only accessible within the function where they are declared. If `var` is declared outside any function, it becomes a global variable.
   - `let` and `const`:** Variables declared with `let` and `const` are block-scoped, meaning they are only accessible within the block (enclosed by curly braces) where they are defined. This includes if statements, loops, and other blocks.

```javascript
function example() {
    if (true) {
        var x = 10;  // function-scoped
        let y = 20;  // block-scoped
        const z = 30;  // block-scoped
    }
    console.log(x);  // 10
    console.log(y);  // ReferenceError: y is not defined
    console.log(z);  // ReferenceError: z is not defined
}
```

2. Hoisting:
   - `var`: Variables declared with `var` are hoisted to the top of their scope, which means they can be accessed before they are declared. However, the value assigned to them is not hoisted.

   - `let` and `const`: Variables declared with `let` and `const` are also hoisted to the top of their block scope, but unlike `var`, they are not initialized. This is often referred to as the "temporal dead zone," and trying to access the variable before its declaration results in a `ReferenceError`.

```javascript
console.log(a);  // undefined
var a = 5;

console.log(b);  // ReferenceError: b is not defined
let b = 10;
```

3. Reassignment/Mutability:
   - `var` and `let`: Variables declared with `var` and `let` can be reassigned. Their values can be changed during the execution of the program.

   - `const`: Variables declared with `const` are constants and cannot be reassigned after they are initialized. They must be assigned a value at the time of declaration, and that value cannot be changed later.

```javascript
var a = 5;
let b = 10;
const c = 15;

a = 20;  // Valid
b = 30;  // Valid
c = 25;  // TypeError: Assignment to constant variable
```

In summary, `var` has function scope and is hoisted, `let` has block scope and is hoisted but not initialized, and `const` has block scope, is hoisted, and cannot be reassigned after initialization.
