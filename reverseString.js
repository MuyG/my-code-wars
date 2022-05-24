
function reverseString(str) {
    let a = str.split(''), l = a.length*2
    for(let i = 0; i < l; i+=2) a.unshift(a[i])
    return a.slice(0,a.length/2).join('')
}

function reverseStringV2(str) {
    for(let i = str.length-1; i >=0 ; i--) str += str.charAt(i)
    return str.slice(-str.length/2)
}