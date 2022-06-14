const str = '4311o th3r3 w0r1d';

//Challenge #1

// setTimeout(() => {
//   console.log(str);
// }, 3000);

// Challenge #2

const strArray = str.split(' ');

for (let i in strArray) {
  if (i < strArray.length - 1) {
    setTimeout(() => {
      process.stdout.write(`${strArray[i]} `);
    }, 1000 * i);
  } else {
    setTimeout(() => {
      process.stdout.write(`${strArray[i]} \n`);
    }, 1000 * i);
  }
}
