# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion.  The `foo` function intends to add two numbers, but due to JavaScript's loose typing, it performs string concatenation when one of the arguments is a string.

The `bug.js` file shows the unexpected behavior. The `bugSolution.js` file offers a solution.

This is a simple example, but the same principle applies to more complex scenarios, leading to subtle and hard-to-debug errors.