
function reverseString(str) {
    let a = str.split(''), l = a.length*2
    for(let i = 0; i < l; i+=2) a.unshift(a[i])
    return a.slice(0,a.length/2).join('')
}