const alphabet = {
    ' ':'','.-':'A','-...':'B','-.-.':'C','-..':'D','.':'E','..-.':'F','--.':'G','....':'H','..':'I','.---':'J','-.-':'K','.-..':'L','--':'M','-.':'N','---':'O','.--.':'P','--.-':'Q','.-.':'R','...':'S','-':'T','..-':'U','...-':'V','.--':'W','-..-':'X','-.--':'Y','--..':'Z','...---...':'SOS','-.-.--':'!','.-.-.-':'.'
}
function decodeMorse(morseCode){
    let x = 0,l='',word='',sentence=''
    morseCode = morseCode.trim()
    for(let i = 0; i < morseCode.length; i++){
        x=i
        l+=morseCode.charAt(i)
        if(morseCode.charAt(i) === ' ' || i === morseCode.length-1){
            l=l.trim()
            Object.entries(alphabet).forEach(entry => {
                const [key, value] = entry
                if(key === l){
                    word+=value
                    l=''
                }
            })
            x++
            if(morseCode.charAt(x) === ' '){
                sentence+=`${word} `
                word=''
                i+=2
            }
        }
        if(i === morseCode.length-1) sentence+=word
    }
    return sentence
}