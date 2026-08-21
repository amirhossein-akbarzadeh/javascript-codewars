function filter_list(l) {
  const array = l.filter((item) => typeof item === "number");
  return array;
}
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
