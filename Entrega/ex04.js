// Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. 

const input = require('synchronous-user-input')

var resultado = 0

function soma() {
    let numero = parseInt(input('Digite um número para realizar uma soma progressiva:'))
    for (let contador = 1; contador <= numero; contador++) {
        resultado += contador

    }
    console.log(`A soma de todos os números do laço de repetição é ${resultado}`)
}
soma()