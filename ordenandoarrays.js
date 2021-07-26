let equipo = [ "PSG", "Chicago Bulls", "Tomateros", "Rangers", "Los padres", "dogers"];
let wins = [ 3, 5, 6, 4, 2, 9];

// creando un objeto de javascript

let objeto = []
for (let index = 0; index < equipo.length; index++){
    objeto.push({equipo: equipo[index], wins: wins[index]});
}

// Ordenando Objeto haciendo uso de sort.
objeto.sort(function(a,b) {
    // si la funcion retorna -1 se situa a en un indice menor que b.
    // si la funcion retorna  1 se situa b en un indice menor que a.
    // si la funcion retorna  0 se deja a y b sin cambios entre ellos, pero ordenados respecto a los otros elementos
    if (a.wins < b.wins){
        return 1;
    }
    if (a.wins > b.wins){
        return -1;
    }
    return 0;
});
console.log(objeto)
