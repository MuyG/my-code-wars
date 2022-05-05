
function solution(input, markers) {
    let commented, result=''
    input.split('').forEach(e => {
        markers.forEach(m => {
            if(e == m){
                result = result.trim()
                commented = true
            }
        })
        if(e == '\n'){
            result = result.trim()
            commented = false
        }
        if(!commented) result += e
    })
    return result
};