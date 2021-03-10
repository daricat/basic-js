module.exports = function countCats(matrix) {
  let count = 0;
  matrix.flat().forEach(element => { if (element === '^^') count += 1 });
  return count;
};
