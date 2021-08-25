function colorOf(r, g, b) {
  red = r.toString(16);
  if (red.length < 2) {
    red = '0' + red;
  }
  green = g.toString(16);
  if (green.length < 2) {
    green = '0' + green;
  }
  blue = b.toString(16);
  if (blue.length < 2) {
    blue = '0' + blue;
  }

  //   console.log('#' + red + green + blue);

  return '#' + red + green + blue;
}
console.log(colorOf(255, 0, 0) === '#ff0000');
console.log(colorOf(0, 111, 0) === '#006f00');
console.log(colorOf(1, 2, 3) === '#010203');
