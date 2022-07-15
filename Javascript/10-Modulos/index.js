import { suma, multiplica } from "./controller.js"
import chalk from 'chalk';

const multiplicacion = multiplica(suma(1,2), suma(4,5))

console.log(multiplicacion)

console.log(chalk.green(multiplicacion));