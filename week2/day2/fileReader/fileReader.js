// We have 3 files
// each of them have a number written in the file
// read each file, get the value from each file
// subtract data2 and data3 numbers from data1 number

const fs = require('fs'); //file system (built in library - node.js)

console.log('before read file');

fs.readFile('./data1.txt', 'utf-8', (err, data) => {
  // console.log('err', err);
  console.log('data1', data);
  fs.readFile('./data2.txt', 'utf-8', (err, data) => {
    // console.log('err', err);
    console.log('data2', data);
    fs.readFile('./data3.txt', 'utf-8', (err, data) => {
      // console.log('err', err);
      console.log('data3', data);
    });
  });
});

console.log('after read file');
