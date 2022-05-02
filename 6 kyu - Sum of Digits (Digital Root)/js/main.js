function digital_root(n) {
    let a = []
    do{
        a = n.toString().split('').map((x) => +x)
        n = a.reduce((a,b)=>a+b)
    }while(n > 9)
    return n
}