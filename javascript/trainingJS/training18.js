function splitAndMerge(string, separator) {
  var words = string.split(' ');
  var arr = [];
  words.forEach((w) => {
    arr.push(w.split('').join(separator));
  });

  return arr.join(' ');
}

//best practice, and I swear what I was trying to do!
function splitAndMerge(str, sp) {
  return str
    .split(' ')
    .map((word) => word.split('').join(sp))
    .join(' ');
}

console.log(splitAndMerge('My name is John', ' ') == 'M y n a m e i s J o h n');
console.log(splitAndMerge('My name is John', '-') == 'M-y n-a-m-e i-s J-o-h-n');
console.log(splitAndMerge('Hello World!', '.') == 'H.e.l.l.o W.o.r.l.d.!');
console.log(splitAndMerge('Hello World!', ',') == 'H,e,l,l,o W,o,r,l,d,!');
