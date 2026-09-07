function arrayDiff(a, b) {
  const filter = a.filter((item) => {
    return b.includes(item) ? false : true;
  });

  return filter;
}
