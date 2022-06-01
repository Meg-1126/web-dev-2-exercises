// setInterval(() => {
//   setTimeout(() => {});
// });

for (let i = 1; i < 4; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 1000 * i);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 3000 * i);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 5000 * i);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   \n');
  }, 7000 * i);
}
