let number = 0
let cron
let time = document.querySelector('h2')


function iniciar() {

    cron = setInterval(function (){

        number++
        time.innerHTML = number

    }, 1000)
    
}

function pausar() {

    clearInterval(cron)
    alert("PAUSADO!!")
    
}

function zerar(){
    number = 0
    time.innerHTML = number
    alert("Conometro zerado")
}