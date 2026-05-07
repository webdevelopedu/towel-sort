module.exports = function towelSort(matrix) {
  if (!matrix) return [];
  return matrix.flatMap((row, i) => (i % 2 === 0 ? row : row.toReversed()));
};
