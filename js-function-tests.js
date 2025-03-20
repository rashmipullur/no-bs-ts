const { getName } = require('./functions')

console.log(getName());
console.log(getName({
    first: "a",
    last: "b"
}))

// npx tsc functions.ts //** to create the functions.js file
// node .\js-function-tests.js