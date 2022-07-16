/**
- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente todos los errores
- Ejecuta el script a través del terminal
 */
let name1 = "Marcos";
let name2 = `Manuel`;

let lastName = 'Cruz';

let student = name1.concat("", lastName)

let studentMayus = student.toUpperCase()

let studentMinus = student.toLowerCase()

let studentLength =student.length

let firstLetter = student.substring(0,1)

let lastLetter = lastName.substring(lastName.length , lastName.length - 1)

let deleteSpace = student.replace( / /g, "")
 
let confirm = student.includes(name1)