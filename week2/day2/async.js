// async sandbox

//Guess what is the output

//example 1
// console.log('1');
// console.log('2');
// console.log('3');

//example 2
const a = () => {
  console.log('running function a...');
};
// console.log('1');
// console.log('2');
// a();
// console.log('3');

//example 3
// console.log('1');
// setTimeout(() => {
//   console.log('t1');
// }, 1000);
// console.log('2');
// a();
// console.log('3');

// example 4 - Cleaning the house
// clean the toilet
console.log('clean the toilet');
setTimeout(() => {
  // play music -async
  console.log('play music');
}, 1000);
// dishwash dishes -async
setTimeout(() => {
  setTimeout(() => {
    console.log('dishwash dishes');
  }, 1000);
}, 500);
// exchange garbage
console.log('exchange garbage');
// wash clothes - async
setTimeout(() => {
  console.log('wash clothes');
}, -1);
// sweep the floop
console.log('sweep the floop');
// mopping floor
console.log('mopping floor');

//example 5
// const higherOrderFunc = function (callback) {
//   const data = { initials: 'AL' };

//   console.log('BEFORE TIMEOUT CALL');
//   setTimeout(() => {
//     data.initials = 'ADL';
//     console.log('data inside timeout', data);
//     callback();
//   });

//   console.log('AFTER TIMEOUT CALL');
//   console.log('data after timeout', data);
// };

// console.log('BEFORE MAIN CALL');
// higherOrderFunc(() => {
//   console.log('INSIDE CALLBACK');
// });
// console.log('AFTER MAIN CALL');
