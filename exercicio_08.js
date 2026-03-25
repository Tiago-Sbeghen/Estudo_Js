
function jogoAdivinhacao() {

    let numero = Math.floor(Math.random() * 50) + 1;
    let condicao = false;
    let tentativa = 0;
    let temp = 0;

    do {

        temp = Number(prompt("Informe um valor"));

        if (numero > temp) {
            alert("Maior");
            tentativa++
        } else if (numero < temp) {
            alert("Menor");
            tentativa++;
        } else {
            alert("Acertou")
        };

    } while (condicao != true);

};

jogoAdivinhacao()