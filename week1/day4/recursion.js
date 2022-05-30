//Print only items (emojis) in the console. Not the arrays.
const printItems = function (array) {
  array.forEach((element) => {
    if(Array.isArray(element)) {
      printItems(element);
    } else {
      console.log(element);
    }
  })
};  
 
const array = ['😎', '💩', '🤗', '😼', '😂'];
printItems(array);

const array2 = ['😎', ['💩', '🤗'], '😼', '😂']; //array[1][0]💩:, array[1][1]🤗:
printItems(array2);

const array3 = [
  '😎',
  [
    ['💩', ['🤗']], //array3[1][0]
    [[['😼']], '😂'], //array3[1][1]
  ],
];
printItems(array3);
// console.log(array3[1][1][1]); //😂
// console.log(array3[1][1][0]); //[ [ '😼' ] ]
// console.log(array3[1][1][0][0]); //[ '😼' ]
// console.log(array3[1][1][0][0][0]); //😼
