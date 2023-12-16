
var btn = document.getElementById('btn');
var array = [];
for (i = 1; i <= 100; i++) {
    array[i - 1] = i;
}

var NumeroAleatorio = Math.floor(Math.random() * array.length);

btn.addEventListener('click', function () {
    var chute = document.getElementById('numero');
    var resultado = document.getElementById('resultado');
    var dica = document.getElementById('dica');
    var img = document.querySelector('img');
    img.style.display = 'none';

    console.log(NumeroAleatorio); //teste para verificar qual numero é;
    if (chute.value > 0 && chute.value <= 100) {
        if (chute.value == NumeroAleatorio) {
            resultado.innerHTML = "Você ACERTOU !!";
            dica.innerHTML = "";
            NumeroAleatorio = Math.floor(Math.random() * array.length);
            img.style.display = 'inline';
        }
        else {
            resultado.innerHTML = "Você ERROU !!";
            if (chute.value > NumeroAleatorio) {
                dica.innerHTML = "O numero é menor";
            }
            else {
                dica.innerHTML = "O numero é maior";
            }
        }
    }
    else {
        alert("Digite um número de 1 até 100 !!");
    }
})






