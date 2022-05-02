function isPrime(n){
    let b = true
    if(n <= 1) return false
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return b = false
    }
    return b
}