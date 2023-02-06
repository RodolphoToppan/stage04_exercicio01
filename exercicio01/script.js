let numberOne = Number(prompt('Digite o primeiro número:'))
let numberTwo = Number(prompt('Digite o segundo número:'))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restdiv = numberOne % numberTwo

alert(`A soma dos números é: ${sum}`)
alert(`A subtração dos números é: ${sub}`)
alert(`A multiplicação dos números é: ${mult}`)
alert(`A divisão dos números é: ${div}`)
alert(`O resto da divisão dos números é: ${restdiv}`)

if (sum % 2 == 0) {
  alert(`A soma dos números é par: ${sum}`)
} else {
  alert(`A soma dos números é ímpar: ${sum}`)
}

if (numberOne == numberTwo) {
  alert(`Os números digitados são iguais`)
} else {
  alert(`Os números digitados são diferentes`)
}
