// My Solution
const duplicateCount = (text) => new Set(text.toLowerCase().split('').sort().filter((x,i,a) => x == a[i+1])).size