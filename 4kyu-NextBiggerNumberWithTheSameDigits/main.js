// My Solution
function nextBigger(n){
    let arr = String(n).split('').map(x => +x),
        subarray = [],
        result = -1

    for(let i = arr.length-1; i >= 0; i--) {
      subarray.unshift(arr[i])
      console.log(subarray)
      if(subarray[0] !== Math.max(...subarray)){
        let tempArr = subarray.slice(1).sort(),
            tempMaxArr = tempArr.filter(x => x > subarray[0]),
            tempIndex = tempArr.indexOf(tempMaxArr[0])

        tempArr[tempIndex] = subarray[0]
        tempArr = tempArr.sort().join('')
        
        console.log(tempArr, tempMaxArr, tempIndex)
        result = arr.slice(0,i)
        result.push(tempMaxArr[0], tempArr)
        i = 0
      }
    }
    return result === -1 ? -1 : +result.join('')
}