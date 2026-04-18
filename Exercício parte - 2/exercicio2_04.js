function exercicio_m2_04() {

    let notas = [];
    let media = 0;

    let nome = prompt("Informe seu nome");

    alert("Olá " + nome + ", Vamos calcular a sua média");
    
    for(let i = 0; i < 3; i++){

        notas[i] = parseFloat(prompt("Informe sua nota " + (i+1)));
        media = media + notas[i];

    };

    media = media/3;

    alert(nome + " Sua média é de: " + media);

};

//exercicio_m2_04()

