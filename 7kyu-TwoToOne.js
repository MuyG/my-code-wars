// My Solution
const longest = (s1, s2) => (s1 + s2).split('').sort().filter((x,i,a) => a[i-1] !== x).join('')

// Favorite/Best Solution
const longest2 = (s1, s2) => [...new Set(s1+s2)].sort().join('')