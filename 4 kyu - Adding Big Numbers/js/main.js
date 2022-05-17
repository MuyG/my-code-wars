
add = (a,b) => {
    if(a.length > b.length){
        bigInt = a.split('').reverse()
        smallInt = b.split('').reverse()
    }else{
        bigInt = b.split('').reverse()
        smallInt = a.split('').reverse()
    }
    let result = [0]
    for(let i = 0; i < bigInt.length; i++){
        if(!smallInt[i]) smallInt.push(0)
        result[i] += +bigInt[i] + +smallInt[i]
        result[i] = String(result[i])
        if(result[i].length > 1){
            result.push(1)
            result[i] = result[i][1]
        }
        else if(result[i].length == 1 && i < bigInt.length-1) result.push(0)
    }
    return result.reverse().join('')
}