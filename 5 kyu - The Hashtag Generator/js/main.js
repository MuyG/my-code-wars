
function generateHashtag (str) {
    if(str.trim() == '') return false
    let result = '#' + str.trim().split(' ').map(e => {
        if(e == '') return
        l = e[0].toUpperCase()
        a = e.split('')
        a.shift()
        a.unshift(l)
        return a.join('')
    }).join('')
    if(result.length <= 140) return result
    else return false
}