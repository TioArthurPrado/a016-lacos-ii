const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

// for(let i = 0; i < array.length; i++){
//     console.log(`O Jogador ${i+1} marcou ${array[i]} nas ultimas 5 temporadas`)
// }


for(let i in array){
    for(let j of array){
        let varI = Number(i)+1
        varI = `Jogador ${varI} marcou ${j} gols na temporada`
    console.log(varI)
    }
    console.log(varI)
}
