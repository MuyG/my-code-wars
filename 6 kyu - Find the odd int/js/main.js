function findOddInt(A){
    let n = A.length
    let APos = 0
    let count = 0
    for(let i = 0; i < n; i++){
        count = 0   
        for(let i2 = 0; i2 < n; i2++){
            A[APos] === A[i2] ? count++ : count
        }
        count%2 === 0 ? APos++ : i = n
    }
    return A[APos]
}