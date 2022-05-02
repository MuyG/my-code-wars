// function friend(friends){
//     friendsMap = friends.filter(x => {
//         if(x.length === 4) return x
//     })
//     return friendsMap
// }

// function friend(friends){
//     return friends.filter(x => x.length === 4)
// }

let friend = (friends) => friends.filter(x => x.length === 4)