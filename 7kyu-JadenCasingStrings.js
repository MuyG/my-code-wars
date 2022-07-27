// My Solution
String.prototype.toJadenCase = function(a) {
    return this.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
}