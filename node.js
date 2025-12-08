const amount = 9
if (amount < 10) {
  console.log('Small number')
} else {
  console.log('Large number')
}
console.log(`The amount is: ${amount}`)
 const names = require('./names')
 const sayHi = require('./global')
 const work = require('./differ')
 require("./function") // no need to store in a variable because we are not exporting anything from function.js because it just runs the code inside it.
 
 sayHi('susan')
 sayHi(names.john)
 sayHi(names.peter)
 console.log(names);
 console.log(work);
 

// modules
// every file is a module by default in node.js
// 📦 Small Explanation of a Module (Node.js)
// A module in Node.js is simply a separate file of code that you can reuse in other parts of your application. It helps keep your project organized and avoids writing the same code multiple times.