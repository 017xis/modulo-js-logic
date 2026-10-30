const medias = [8.5, 9, 6, 5.5, 8.5, 7]
// crie uma lista de nomes com Ana, Bruno, Carla, Diego, Elisa, Fábio, Junior
// mostre no console, o nomes[3], e medias[3]
const nomes = ["Ana", "Bruno", "Carla", "Diego", "Elisa", "Fábio", "Junior"]
console.log(nomes[3] + " " + medias[3]) // Diego

for (let i = 0; i < nomes.length; i++) {
    console.log("Voltas: ", nomes[1], i)
}



// console.log(medias[1]) // 9
// console.log(medias[5]) // 7
// console.log(medias[4]) // 8.5
// console.log(medias.length) // 7
// console.log(media[10]) // undefined