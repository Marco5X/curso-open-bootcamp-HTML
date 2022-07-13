/*
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/
const listaCompras = ["azúcar", "te", "leche", "pan", "cacao"]

listaCompras.push("aceite de girasol")
console.log(listaCompras)

listaCompras.pop()
console.log(listaCompras)

const pelisFavoritas = [ 
    {
        titulo: "si, señor", 
        director:"alquien",
        fecha: new Date(2009, 01, 01)
    },
    {
        titulo: "que paso ayer", 
        director:"nose",
        fecha: new Date(2010, 01, 12)
    },
    {
        titulo: "los vengadores", 
        director:"elquesea",
        fecha: new Date(2021, 01, 10)
    }
]

const pelisNuevas = pelisFavoritas.filter(peli => peli.fecha > new Date(2010, 01, 01))
console.log(pelisNuevas)

const peliDirectores = pelisFavoritas.map(dires => dires.director)
console.log(peliDirectores)

const peliTitulos = pelisFavoritas.map(title => title.titulo)
console.log(peliTitulos)

const directores_titulos = peliDirectores.concat(peliTitulos)
console.log(directores_titulos)

const directores_Titulos = [...peliDirectores, ...peliTitulos]
console.log(directores_Titulos)