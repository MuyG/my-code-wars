
function isPangram(string){
    let p
    return string.toLowerCase().split('').sort().filter(x => {
      if(x !== p && x !== x.toUpperCase()) {
        p = x
        return x
      }
    }).length == 26
}