// My Solution
const positiveSum = (arr) => arr.reduce((a,b) => b >= 0 ? a + b : a + 0, 0)

// Favorite Solution
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }