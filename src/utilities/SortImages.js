export default (a, b) => {
  if (a.date < b.date) {
    return 1;
  }

  return -1;
};
