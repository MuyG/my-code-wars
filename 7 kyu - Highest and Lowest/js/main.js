function highAndLow(numbers){
    let a = numbers.split(' ')
    a = a.map(x => parseInt(x))
    console.log(a)
    return `${Math.max(...a)} ${Math.min(...a)}`
}