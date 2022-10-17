const diasId = document.querySelector("#dias")
const horasId = document.querySelector("#horas")
const minutosId = document.querySelector("#minutos")
const segundosId = document.querySelector("#segundos")

const aniversario = "23 jan 2023";

function contador() {
    const aniversarioData = new Date(aniversario);
    const dataAtual = new Date();
    const diferenca = aniversarioData - dataAtual;
    
    const diferencaSegundos = diferenca / 1000;
    const dias = Math.floor(diferencaSegundos / 3600 / 24);
    const horas = Math.floor(diferencaSegundos / 3600) % 24;
    const minutos = Math.floor(diferencaSegundos / 60) % 60;
    const segundos = Math.floor(diferencaSegundos) % 60;

    console.log(dias, horas, minutos, segundos);

    diasId.textContent = dias;
    horasId.textContent = horas;
    minutosId.textContent = minutos;
    segundosId.textContent = segundos;    

}

setInterval(contador, 1000);