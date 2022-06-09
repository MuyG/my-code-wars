
function openOrSenior(data){
    return data.map(x => x[0] < 55 ? 'Open' : x[0] >= 55 && x[1] <= 7 ? 'Open' : 'Senior')
  }