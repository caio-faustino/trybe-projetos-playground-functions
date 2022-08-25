// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let concatArray = array[array.length - 1];
  return concatArray + ', ' + array[0];
}

// Desafio 5
function footballPoints(win, tie) {
  // seu código aqui
  return win * 3 + tie;
}

// Desafio 6
function highestCount(value) {
  // seu código aqui
  let maxSelect = Math.max.apply(null, value);
  let count = 0;
  for (let index = 0; index < value.length; index += 1) {
    if (value[index] === maxSelect) {
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dCat1 = Math.abs(mouse - cat1);
  let dCat2 = Math.abs(mouse - cat2);
  if (dCat1 < dCat2) {
    return 'cat1';
  } else if (dCat2 < dCat1) {
    return 'cat2';
  } else {
    'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(value) {
  // seu código aqui
  let array = [];
  for (let index = 0; index < value.length; index += 1) {
    let divi3 = value[index] % 3;
    let divi5 = value[index] % 5;
    if (divi3 === 0 && divi3 !== divi5) {
      array.push('fizz');
    } else if (divi5 === 0 && divi5 !== divi3) {
      array.push('buzz');
    } else if (divi3 === 0 && divi5 === 0) {
      array.push('fizzBuzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
