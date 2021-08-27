//https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

//I'm dumb and I should feel bad!
// function firstToLast(str, c) {
//   var result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === c) {
//       result.push(str.indexOf(c));
//       result.push(str.lastIndexOf(c));
//     } else if (str.indexOf(c) === -1) {
//       return -1;
//     }
//   }
//   if (result.length === 1) {
//     return 0;
//   } else {
//     return Math.floor(result[1] - result[0]);
//   }
// }

function firstToLast(str, c) {
  var result = [];

  result.push(str.indexOf(c));
  result.push(str.lastIndexOf(c));

  if (result[0] === -1) {
    return -1;
  }

  return Math.floor(result[1] - result[0]);
}

console.log(firstToLast('ababc', 'c'));

console.log(firstToLast('mbucsszhunqkedfqngnfwbkktopzipjmtkvqwghcgxmzrwvrayrd', 'b') === 20);
console.log(firstToLast('ababc', 'c') === 0);
console.log(firstToLast('ababc', 'd') === -1);
