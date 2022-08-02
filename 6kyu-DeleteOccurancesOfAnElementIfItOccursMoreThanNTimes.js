// My Solution

// P: An array of numbers, a number
// R: A new array of numbers in the same order as the one entered, but with duplicates only up to the nth number
// E: ([1,1,2,2,2,3,3,4], 2) - return [1,1,2,2,3,3,4]
// P: Filter through an array and count how many of each element there is into an object. If the count is higher than 'n' than delete it.

function deleteNth(arr,n){
    let obj = {}
    return arr.filter(x => {
      if(!obj[x]) {
        obj[x] = 0
        obj[x]++
        return x
      }
      else if(obj[x] < n) {
        obj[x]++
        return x
      }
    })
}