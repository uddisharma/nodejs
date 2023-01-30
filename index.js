const fs = require('fs');
const a = fs.writeFileSync('test.txt', 'hello world');

const b = fs.readFileSync('test.txt', 'utf-8');
console.log(b)
fs.renameSync('test.txt', 'mytest.txt')
fs.appendFileSync('mytest.txt', 'my name is deepak sharma')
fs.mkdir('deepak')