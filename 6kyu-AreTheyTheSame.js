// My solution
function comp(array1, array2){
    return array1 == null ? false
    : array2 == null ? false 
    : array1.map(x => x*x).sort().join() == array2.sort().join() ? true : false
}

// Favorite solution
function comp(a, b) {
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
  }