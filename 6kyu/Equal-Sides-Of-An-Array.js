function findEvenIndex(arr) {
  const result = arr.findIndex((item, index) => {
    const letNumbersSum = arr
      .slice(0, index)
      .reduce((acc, cur) => acc + cur, 0);
    const rightNumbersSum = arr
      .slice(index + 1)
      .reduce((acc, cur) => acc + cur, 0);
    if (letNumbersSum === rightNumbersSum) {
      return true;
    }
  });
  return result;
}
