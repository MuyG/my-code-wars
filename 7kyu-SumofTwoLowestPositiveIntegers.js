
const sumTwoSmallestNumbers = (n) => n.sort((a,b)=>a-b).slice(0,2).reduce((a,b)=>a+b)