function topSecret(str) {
  var chars = str.split('');

  for (let i = 0; i < chars.length; i++) {
    chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
  }
  return chars.join('');
}
//question1: The top secret file number is...
answer1 = '?';
//question2: Super agent's name is...
answer2 = '?';
//question3: He stole the treasure is...
answer3 = '?';

console.log(topSecret('Pb qdph lv Mrkq'));

// console.log(topSecret('Pb qdph lv Mrkq') == 'My name is John');
// console.log(topSecret('wklv lv dq hadpsoh') == 'this is an example');
// console.log(topSecret('Khoor Zruog!') == 'Hello World!');
