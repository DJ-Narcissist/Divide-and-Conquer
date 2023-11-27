function countZeroes(arr, start = 0, end = arr.length - 1) {
  if (start > end) {
    return 0;
  }

  if (arr[Math.floor((start + end) / 2)] === 0) {
    return countZeroes(arr, Math.floor((start + end) / 2) + 1, end);
  }
}

module.exports = countZeroes