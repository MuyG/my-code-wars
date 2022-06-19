
function SeriesSum(n){
    let x=1, a=[]
    for(let i = 0; i < n; i++) {
      a.push(1/x)
      x+=3
    }
    return n == 0 ? '0.00' : a.reduce((sum, val) => sum + val).toFixed(2)
  }