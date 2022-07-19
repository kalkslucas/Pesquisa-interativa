var tela = document.getElementById('texto')
var nota = document.getElementsByClassName('botao').value

function aplicarNotaUm() {
    nota = 1
    console.log(nota);
}

function aplicarNotaDois() {
    nota = 2
    console.log(nota);
}

function aplicarNotaTres() {
    nota = 3
    console.log(nota);
}

function aplicarNotaQuatro() {
    nota = 4
    console.log(nota);
}

function aplicarNotaCinco() {
    nota = 5
    console.log(nota);
}

function submit() {
    window.location.href = 'thankyou.html?' + nota
}

nota = window.location.search
nota = nota.replace('?', '')

tela.innerText = "You selected "+ nota +" out of 5"

