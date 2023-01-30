const fs = require('fs');
const a = fs.writeFileSync('test.txt', 'hello world');

console.log(a)