// My Solution
function digPow(n, p){
    let k = String(n).split('').map(x => Number(x)).reduce((a,b,i) => a + b**(p+i), 0) / n
    return k >= 1 && k % 1 == 0 ? k : -1
}

// My Solution *Fixed*
function digPow(n, p){
    let k = String(n).split('').reduce((a,b,i) => a + (+b)**(p+i), 0)
    return k % n ? -1 : k / n
}

// Best Practice
function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
}