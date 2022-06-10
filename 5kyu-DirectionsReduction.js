
function dirReduc(arr){
    let redo
    do{
      redo = false, result = []
      for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'NORTH' && arr[i+1] === 'SOUTH' || arr[i] === 'SOUTH' && arr[i+1] === 'NORTH' || arr[i] === 'EAST' && arr[i+1] === 'WEST' || arr[i] === 'WEST' && arr[i+1] === 'EAST'){
          redo = true
          i++
        }
        else result.push(arr[i])
      }
      arr = result
    }while(redo == true)
    return result
}