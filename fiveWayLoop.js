const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']
let i = 0
let j = 0

do {
  i++
  console.log(`${tab[i]}, length: ${tab[i].length}`)
} while (i < tab.length);

while (j < tab.length) {
  j++
  console.log(`${tab[j]}, length: ${tab[j].length}`)
}