
function anagrams(word, words) {
  let wordA=word.split(''), result=[], matched

  words.forEach(word => {
      let testWord = word.split('')
      wordA.forEach(letter => {
        let index = testWord.indexOf(letter)
        if(index == -1) return matched = false
        else {
            testWord.splice(index,1,'')
            matched = true
        }
      })
      testWord = testWord.join('')
      if(matched == true && testWord == '') result.push(word)
  })
  if(result == null) return []
  else return result
}