/**
 * Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
 */

const datos = {
    nombre: "Marcos",
    apellido: "Cruz",
    edad: 35,
    altura: 165,
    eresDesarrollador: true
}

const edad = datos.edad 
console.log(edad)

const datosAmigos = [{...datos}, {
    nombre: "Luciana",
    apellido: "Baleriano",
    edad: 34,
    altura: 158,
    eresDesarrollador: false
},
{
    nombre: "Patricia",
    apellido: "Benites",
    edad: 27,
    altura: 160,
    eresDesarrollador: false
}]
console.log(datosAmigos)

const listaAmigotes = datosAmigos.sort((a,b) => b.edad - a.edad)
console.log(listaAmigotes)