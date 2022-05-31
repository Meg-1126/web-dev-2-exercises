// async sandbox

//Guess what is the output

//example 1
// console.log('1');
// console.log('2');
// console.log('3');

//example 2
// const a = () => {
//   console.log('running function a...');
// };
// console.log('1');
// console.log('2');
// a();
// console.log('3');

//example 3
// console.log('1');
// setTimeout(() => {
//   console.log('t1');
// }, 1);
// console.log('2');
// a();
// console.log('3');

// example 4 - Cleaning the house

//clean the toilet
//sweep the floor
//vaccum the floor
// dishwash dishes
// wash clothes

//example 5
const higherOrderFunc = function (callback) {
  const data = { initials: 'AL' };

  console.log('BEFORE TIMEOUT CALL');
  setTimeout(() => {
    data.initials = 'ADL';
    console.log('data2', data);
    callback();
  });

  console.log('AFTER TIMEOUT CALL');
  console.log('DATA1', data);
};

console.log('BEFORE MAIN CALL');
higherOrderFunc(() => {
  console.log('INSIDE CALLBACK');
});
console.log('AFTER MAIN CALL');

// BEFORE MAIN CALL
// BEFORE TIMEOUT CALL
// AFTER TIMEOUT CALL
// INSIDE CALLBACK
// AFTER MAIN CALL
