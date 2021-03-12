const podium = (tabNbr) => {
  const res = tabNbr.sort((x, y) => y - x).slice(0, 3);
  console.log(`1st: ${res[0]}`)
  console.log(`2nd: ${res[1]}`)
  console.log(`3rd: ${res[2]}`)
}

podium([13, 19, 17, 14, 15, 8, 10, 12])