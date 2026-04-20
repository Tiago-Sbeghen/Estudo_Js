
//1. Peça um número e mostre se ele é par ou ímpar.

function ex_01() {

    let number = Number(prompt("Informe um número"));

    if(number % 2 === 0) {
        alert("O número " + number + " é par");
    } else {
        alert("O número " + number + " é impár");
    };

};

//2. Peça dois números e mostre qual é o maior.

function ex_02() {

    let num1 = Number(prompt("Informe um número"));
    let num2 = Number(prompt("Informe outro número"));

    if(num1 > num2) {
        alert("O número " + num1 + " é maior");
    } else if(num2 > num1) {
        alert("O número " + num2 + " é maior");
    } else {
        alert("Os números possuem o mesmo valor");
    };

};

//3. Peça a idade de uma pessoa e diga se ela é maior de idade.

function ex_03() {

    let idade = Number(prompt("Informe sua idade"));

    if(idade >= 18) {
        alert("Você é maior de idade");
    } else {
        alert("Você é menor de idade");
    }

};

//4. Peça um número e mostre a tabuada dele (1 a 10).

function ex_04() {

    let number = Number(prompt("Informe um número"));

    for(let i = 0; i < 10; i++) {

        console.log(number * (i + 1));
    };

};

//5. Peça 3 notas e calcule a média.

function ex_05() {

    let notas = [];
    let media = 0;

    for(let i = 0; i < 3; i++) {

        notas[i] = Number(prompt("Informe sua nota " + (i + 1)));

        media += notas[i]; 
    };

    media = media / 3;

    console.log("A sua média é de " + media);

};

//6. Peça um número e mostre todos os números de 1 até ele.

