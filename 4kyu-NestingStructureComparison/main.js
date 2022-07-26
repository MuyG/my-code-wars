// My First Solution
Array.prototype.sameStructureAs = function (other) {
    let same = true
    return callBack(this, other)
    function callBack(a1, a2) {
        let i = 0
        if(Array.isArray(a2)) {
            for (let x of a2) {
                i = a2.indexOf(x)
                if(!Array.isArray(a1[i]) && Array.isArray(x)) same = false
                else if(Array.isArray(a1[i]) && !Array.isArray(x)) same = false
                else if(Array.isArray(a1[i]) && Array.isArray(x)) {
                    if(a1[i].length !== x.length) same = false
                    else if(!callBack(a1[i], x)) same = false
                }
    
                if(same === false) break
            }
        }
        else if(a1 !== a2) same = false
        return same
    }
};

// My Second Solution
Array.prototype.sameStructureAs = function (other) {
    return JSON.stringify(this).split('').map(x => x === '[' || x === ']' || x === ',' ? x : x = '').join('') === JSON.stringify(other).split('').map(x => x === '[' || x === ']' || x === ',' ? x : x = '').join('')
}