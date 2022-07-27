function isInteresting(number, awesomePhrases) {
    let str = '', interesting = 0
    for(let i = 0; i <= 2; i++) {
        str = String(number)
        // Check if digit is followed by all zeros
        if(+str[0] === str.split('').reduce((a,b)=>a + +b, 0) && number >= 100) interesting = true

        // Every digit is the same number
        else if(str.split('').every((x, i, a) => x === a[0]) && number >= 100) interesting = true

        // Digits are sequential incrementing
        else if(str.split('').every((x, i, a) => i === a.length-1 || +x === 9 && +a[i+1] === 0 || +x + 1 === +a[i+1]) && number >= 100) interesting = true

        // Digits are sequential decrementing
        else if(str.split('').every((x, i, a) => i === a.length-1 || +x - 1 === +a[i+1]) && number >= 100) interesting = true

        // Digits are a palindrome
        else if(str === str.split('').reverse().join('') && number >= 100) interesting = true

        // Digits match one of the awesome phrases
        else if(awesomePhrases.includes(+str) && number >= 100) interesting = true

        // Check Interesting Status
        if(interesting === true && i === 0){
            interesting = 2
            i = 3
        }
        else if(interesting === true && i > 0){
            interesting = 1
            i = 3
        }
        else interesting = 0

        // Check next mile
        number++
    }
    return interesting
}