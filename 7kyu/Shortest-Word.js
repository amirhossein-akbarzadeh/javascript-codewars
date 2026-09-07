function findShort(s) {
  const splited = s.split(" ");
  let shortest = splited[0].length;
  for (const word of splited) {
    if (word.length < shortest) {
      shortest = word.length;
    }
  }
  return shortest;
}

console.log(findShort("Hello javascript I am learning"));
