
function addBinary(a,b) {
    let i=a+b, count=0, result=''
    do {
      i /= 2
      count++
    } while (i >= 2)
    i=a+b
    for (count; count >= 0; count--) {
      if(i >= 2**count) {
        result+='1'
        i-=2**count
      }
      else result+='0'
    }
    return result
  }