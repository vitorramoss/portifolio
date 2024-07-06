const botaoCalcular = document.querySelector('.botao-calcular')
botaoCalcular.onclick = calcular

window.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        botaoCalcular.click()
    }
})

function calcular() {
    const peso = document.querySelector('.input-kg')
    const altura = document.querySelector('.input-metros')
    const imc = peso.value / (altura.value**2)
    const imcTag = document.querySelector('.resultado__num')
    imcTag.textContent = `imc: ${imc.toFixed(2)}`
    const imcTexto = document.querySelector('.resultado__texto')

    if(imc < 18.5){
        imcTexto.textContent = 'Abaixo do peso!'
        imcTexto.style.color = 'orange'
    }
    else if (imc >= 18.5 && imc < 24.9) {
        imcTexto.textContent = 'Peso ideal!'
        imcTexto.style.color = 'green'
    }
    else if (imc >= 25.0 && imc < 29.9) {
        imcTexto.textContent = 'Acima do peso!'
        imcTexto.style.color = 'red'
    }
    else if (imc >= 30.0 && imc < 34.9) {
        imcTexto.textContent = 'Obesidade grau 1!'
        imcTexto.style.color = 'red'
    }
    else if (imc >= 35.0 && imc < 39.9) {
        imcTexto.textContent = 'Obesidade grau 2 (severa)!'
        imcTexto.style.color = 'red'
    }
    else if (imc >= 40) {
        imcTexto.textContent = 'Obesidade grau 3 (Mórbida)!'
        imcTexto.style.color = 'red'
    }

    peso.value = ''
    altura.value = ''
    peso.focus()
}
