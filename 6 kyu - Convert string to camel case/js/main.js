function convertToCamelCase(str){
    if(str == ''){
        return ''
    }
    let convertMeArray = str.split('')
    let n = str.length
    str = ''
    str += convertMeArray[0]
    for(let i = 1; i < n; i++){
        if(convertMeArray[i] == '-' || convertMeArray[i] == '_'){
            i++
            str += convertMeArray[i].toUpperCase()
        }
        else{str += convertMeArray[i]}
    }
    return str
}