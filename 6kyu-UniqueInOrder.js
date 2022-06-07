
uniqueInOrder = (it) => {
  Array.isArray(it) ? it : it = it.split('')
  return it.filter((el, i) => el !== it[i-1])
}