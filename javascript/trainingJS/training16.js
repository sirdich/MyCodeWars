//https://www.codewars.com/kata/57274562c8dcebe77e001012

const assert = require('assert');

function cutIt(arr) {
  var shortest = findShort(arr);

  var result = arr.map((i) => i.substring(0, shortest));

  return result;
}

function findShort(arr) {
  var shortest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest || shortest === 0) {
      shortest = arr[i].length;
    }
  }
  return shortest;
}

describe('Array', function () {
  it('should return -1 when the value is not present', function () {
    assert.assertSimilar(cutIt(['codewars', 'javascript', 'java']), ['code', 'java', 'java']);
    assert.assertSimilar(cutIt(['ab', 'cde', 'fgh']), ['ab', 'cd', 'fg']);
    assert.assertSimilar(cutIt(['abc', 'defgh', 'ijklmn']), ['abc', 'def', 'ijk']);
  });
});

// console.log(cutIt(['ab', 'cde', 'fgh']));
// console.log(cutIt(['abc', 'defgh', 'ijklmn']));
// console.log(cutIt(['codewars', 'javascript', 'java']));

// console.log(cutIt(['ab', 'cde', 'fgh']) === ['ab', 'cd', 'fg']);
// console.log(cutIt(['abc', 'defgh', 'ijklmn']) === ['abc', 'def', 'ijk']);
// console.log(cutIt(['codewars', 'javascript', 'java']) === ['code', 'java', 'java']);
