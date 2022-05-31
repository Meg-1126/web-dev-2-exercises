/*
Let's play a bit with setTimeout to get comfortable with asynchronous control flow.

Challenge #1
First let's start with a simple exercise.

Instruction
Have our file print out these three words "4311o th3r3 w0r1d" three seconds after the file is run.
All of the words can appear at the same time.*/
const str = "4311o th3r3 w0r1d";
const arr = str.split(" ");

//  for (let word of arr) {
//   setTimeout(() => {
//     console.log(word);
//   }, 3000);
// }

/*
Challenge #2
Next, let's make things more interesting...

Instruction
Instead of printing the entire sentence together, have our code print out each of the three words one at a time, 1 second apart.

It's okay if each of the words appears on a separate line, due to console.log.
*/

//Code here...

for (let i = 0; i < arr.length; i++)  {
  setTimeout(() => {
    console.log(arr[i]);
  }, 1000 * i);
}
