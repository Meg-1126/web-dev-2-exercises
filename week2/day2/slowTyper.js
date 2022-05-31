// slow type some messages //
// we want to make the program type info out, but in a very slow way...

const str = 'Hello World\n';

//setTimeout
// for (let i in str) {
//   setTimeout(() => {
//     process.stdout.write(str[i]);
//   }, 1000 * i);
// }

//setInterval
let i = 0;
setInterval(() => {
  if (i > str.length - 1) {
    clearInterval();
  } else {
    process.stdout.write(i.toString());
    i++;
  }
}, 300);
