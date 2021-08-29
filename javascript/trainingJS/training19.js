function alienLanguage(str) {
  var words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, -1).toUpperCase() + words[i].slice(-1).toLowerCase();
  }

  return words.join(' ');
}

// console.log(alienLanguage('HELLO WORLD'));

console.log(alienLanguage('My name is John') == 'My NAMe Is JOHn');
console.log(alienLanguage('this is an example') == 'THIs Is An EXAMPLe');
console.log(alienLanguage('Hello World') == 'HELLo WORLd');
console.log(alienLanguage('HELLO WORLD') == 'HELLo WORLd');
