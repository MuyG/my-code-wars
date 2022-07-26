// My Solution
function findNb(m) {
    let x = 0, n = 0
    do {
      n++
      x += n**3
    } while (x < m)
    return x === m ? n : -1
}