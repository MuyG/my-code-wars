function validParentheses(parens) {
    let a = parens.split(''),o=0,b=true
    a.forEach(x => {
        (x === '(') ? o++ : o--
        if(o < 0) return b = false
    })
    if(o === 0) return b
    else return b = false
}

// function validParentheses(parens) {
//     let a = parens.split(''),l=0,r=0
//     a.forEach(x => {(x === '(') ? l++ : r++})
//     (l-r === 0) ? true : false
// }