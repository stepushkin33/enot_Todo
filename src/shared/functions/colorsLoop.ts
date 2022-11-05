const generator = function* (arr: string[]) {
  let i = 0;
  let length = arr.length;
  while (true) {
    yield arr[i];
    i++;
    if (i === length) i = 0;
  }
};

export default generator;
