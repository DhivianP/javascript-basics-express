function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !(a || b);
}

function one(a, b) {
  if (a && b) {
    return false;
  }
  if (a || b) {
    return true;
  }
  if (!a && !b) {
    return false;
  }
}

function truthiness(a) {
  if (a) {
    return true;
  }
  if (!a) {
    return false;
  }
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a || b) {
    return false;
  }
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  return false;
}

function isOdd(a) {
  if (a % 2 == 0) {
    return false;
  }
  return true;
}

function isEven(a) {
  if (a % 2 == 0) {
    return true;
  }
  return false;
}

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }
  return false;
}

function startsWith(char, string) {
  if (string.charAt(0) === char) {
    return true;
  }
  return false;
}

function containsVowels(string) {
  const word = string.toUpperCase();
  if (word.includes('A')) {
    return true;
  }
  if (word.includes('E')) {
    return true;
  }
  if (word.includes('I')) {
    return true;
  }
  if (word.includes('O')) {
    return true;
  }
  if (word.includes('U')) {
    return true;
  }
  return false;
}

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
