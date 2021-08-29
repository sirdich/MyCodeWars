// function solution(str, ending) {
//   var endCompare = str.slice(-1 * ending.length);

//   if (ending.length == 0) {
//     return true;
//   } else {
//     return endCompare == ending;
//   }
// }

//best practive from codewars. Didn't know there was a endsWith function!
function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution('abcde', ''));

console.log(solution('abcde', 'cde') == true);
console.log(solution('abcde', 'abc') == false);
