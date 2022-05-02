function count(string){
    let obj = {}, x
    if(!string) return obj
    for(let i = 0; i < string.length; i++){
        x = string.charAt(i)
        if(!obj[x]) obj[x] = 0
        obj[x]++
    }
    return obj
}

// Doing the Most Over Here

// function count(string){
//     let obj = {}, x
//     if(!string) return obj
//     for(let i = 0; i < string.length; i++){
//         x = string.charAt(i)
//         if(!obj[`The Letter: ` + x.toUpperCase()]) obj[`The Letter: ` + x.toUpperCase()] = 0
//         obj[`The Letter: ` + x.toUpperCase()]++
//     }
//     return obj
// }