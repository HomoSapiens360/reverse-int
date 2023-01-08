module.exports = function reverse(n) {
  return String(String(Math.abs(n)).split('').reverse().join(''));
}
