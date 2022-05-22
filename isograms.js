function isIsogram(str){
    let a = str.toLowerCase().split('').sort(), result = true
    a.forEach((x,i) => a.indexOf(x) !== i ? result = false : null)
    return result
  }