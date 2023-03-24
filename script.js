const closingBracket = (str) => {
  let open = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let close = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (open[current]) {
      stack.push(current);
    } else if (close[current]) {
      let last = stack.pop();
      if (close[current] !== last) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(closingBracket("((()))")); // true
console.log(closingBracket("[[]](())")); // true
console.log(closingBracket("((())")); // false
console.log(closingBracket("][]")); // false
console.log(closingBracket("({})")); // true
