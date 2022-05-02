snail = function(array) {
    let snailArray=[], controlArray=[], l=array.length, x=-1, y=0, count=1
    if(array[0][0] == undefined) return []
    do {
        if(l == array.length) controlArray.push(l)
        else controlArray.push(l,l)
        l--
    } while (l>0);
    controlArray.forEach(e => {
        if(count == 5) count = 1
        if(count == 1){
            for(let i = 0; i < e; i++){
                x++
                snailArray.push(array[y][x])
            }
        }
        else if(count == 2){
            for(let i = 0; i < e; i++){
                y++
                snailArray.push(array[y][x])
            }
        }
        else if(count == 3){
            for(let i = 0; i < e; i++){
                x--
                snailArray.push(array[y][x])
            }
        }
        else if(count == 4){
            for(let i = 0; i < e; i++){
                y--
                snailArray.push(array[y][x])
            }
        }
        count++
    })
    return snailArray
}