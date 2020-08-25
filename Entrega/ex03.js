// Faça um programa que receba um valor em metros e chame uma função que converta em milímetros.
const input = require('synchronous-user-input')
var metros = input('Quantos Metros deseja converter em Milímetros?')

function paraMilimetros() {
    let mili = metros * 1000
    console.log(`${metros} Metros é equivalente a ${mili} Milímetros`)
}

paraMilimetros()