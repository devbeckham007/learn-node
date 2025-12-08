// os Module
const os = require('os')
// info about current user
const user = os.userInfo()
console.log(user);
// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);
// info about current os
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.freemem(),
}
console.log(currentOs);
console.log(os.platform());


//paths Module
const path = require('path')
console.log(path.sep);
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);
const base = path.basename(filePath)
console.log(base);
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute); // gives absolute path from root directory 
 
// fs module
const { readFileSync, writeFileSync, readFile } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/sec.txt', 'utf8');

console.log(first, second);

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}\n`,
  { flag: 'a' } // append instead of overwrite
);
	// Blocking (synchronous):
// The program waits until a task finishes before moving on.
// Example: Reading a huge file synchronously will freeze the program until the file is fully read.
// const { readFileSync } = require('fs');
// const data = readFileSync('./bigfile.txt', 'utf8'); // blocks here
// console.log('This runs only after file is done');


// Non-blocking (asynchronous):
// The program does not wait. It starts the task, then moves on immediately. When the task finishes, the callback runs.
// Example: Reading a file asynchronously with a callback.
// const { readFile } = require('fs');
// readFile('./bigfile.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('File finished reading:', data);
// });

// console.log('This runs right away, without waiting!');

// callbacks with fs module
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//     console.log(result);
    
//     const first = result;
//   readFile('./content/sec.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       './content/result-async.txt',
//       `Here is the result : ${first}, ${second}\n`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//   });
//   });
//       });
    

// http module
const http = require('http');
const server = http.createServer((req, res) => { // request and response
  if(req.url === '/'){
    res.end('Welcome to our home page')
  }
  if(req.url === '/about'){
    res.end('Here is our short history')
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
    `)
});
server.listen(5000)

// npm - global command, comes with node
// npm (Node Package Manager) is the default package manager for Node.js. It lets you install, manage, and share JavaScript packages (libraries, tools, frameworks) so you don’t have to reinvent the wheel. Developers use npm to add functionality to projects, manage dependencies, and publish their own code.
// dependencies - local packages that are required for our project to work
//module - a file or a folder in node.js that can be reused throughout the application
// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// local dependency - use it only in this particular project
// npm install <packageName>
// npm init -y (it will create package.json with default values)
// npm init (it will ask you questions and then create package.json file)
// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm install <packageName> (it will create node_modules folder and package-lock.json file)
// package-lock.json - it is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
// node_modules - it is a folder where all the installed packages are stored

const _ = require('lodash');
const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);