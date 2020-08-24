// Faça um programa que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32

const input = require('synchronous-user-input')
var celsius = input('Qual a temperatura em °C deseja converter em °F?')

function forFahrenheit() {
    console.log(`${celsius}°C são ` + (celsius * 9 / 5 + (32)) + '°F')
}

forFahrenheit()