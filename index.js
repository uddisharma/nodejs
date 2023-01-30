const fs = require('fs');
const a = fs.writeFileSync('test.txt', 'hello world');

const b = fs.readFileSync('test.txt', 'utf-8');
console.log(b)
