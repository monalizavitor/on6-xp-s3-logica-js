// Agora faça um programa que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius.

const input = require('synchronous-user-input')
var fahrenheit = input('Qual a temperatura em °F deseja converter em °C?')

function forCelsius() {
    return (fahrenheit - 32) * 5 / 9
}
console.log(`${fahrenheit}°F são ${forCelsius(fahrenheit).toFixed(3)} °C`)

