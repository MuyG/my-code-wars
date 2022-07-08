// My solution
const arrayDiff = (a, b) => a.filter(x => b.includes(x) ? null : x.toString())

// Simplified Solution
const arrayDiff2 = (a, b) => a.filter(e => !b.includes(e))

// Best/Most Efficient Solution
function arrayDiff(a, b) {
    const set = new Set(...[b]);
  
    return a.filter(q => !set.has(q));
}