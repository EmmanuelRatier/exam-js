const average = (tabNbr) => {
  return tabNbr.reduce((a, b) => a + b, 0) / tabNbr.length
}

console.log(average([13, 19, 17, 14, 15, 8, 10, 12]))