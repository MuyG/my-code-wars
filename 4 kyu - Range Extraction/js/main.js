function solution(list){
    let result = [], matched = false, str = ''
    for(let i = 0; i < list.length; i++){
        if(list[i]+1 == list[i+1] && matched == false){
            if(list[i]+2 == list[i+2]){
                str = String(list[i])
                matched = true
                i+=2
            }
            else result.push(String(list[i]))
        }
        else if(list[i]+1 !== list[i+1] && matched == false) result.push(String(list[i]))
        if(list[i]+1 !== list[i+1] && matched == true){
            str += `-${String(list[i])}`
            result.push(str)
            str = ''
            matched = false
        }
    }
    return result.join()
}