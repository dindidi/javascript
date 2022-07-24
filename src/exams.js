
import carros from './carros.js'



const filteredCarros= carros.filter( (carros)=> {
    return carros.marca === 'fiat'
})

console.log(filteredCarros)

let toPrint = ''

// Lista 
filteredCarros.forEach(carros => {
   toPrint += carros.carros + ', '
});

// for( let c = 0; c < filteredMonths.length; c++ ){

// }

let carro = [30,30,30] // array comum

// Reduce - função com todos os itens do array e devolve um valor único

let sumCarroValor = filteredCarros.reduce( (prev, next) => {
    return {valor: prev.valor + next.valor}
})

// Map - funções em arrays de retorno individual (cada valor array)
let cachorros = [10, 15, 7, 8, 9]

let years = cachorros.map( (cachorro => {
    return cachorro * 7
}))

document.getElementById('main').innerHTML = 
    toPrint + '<br> Soma dos dias dos meses selecionados: ' 
    + sumMonthDays.days + '<br> idade humana dos cachorros: '  
    + years + ' '
