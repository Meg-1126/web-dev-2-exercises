// for (let i = 1; i < 4; i++) {
//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 100 * i);

//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300 * i);

//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 500 * i);

//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   ');
//   }, 700 * i);
// }

const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let i = 0;
const interval = setInterval(() => {
  if (i > array.length - 1) {
    i = 0;
  }
  process.stdout.write(array[i]);
  i++;
}, 200);

setTimeout(() => {
  clearInterval(interval);
  process.stdout.write('\n');
}, 2400);
