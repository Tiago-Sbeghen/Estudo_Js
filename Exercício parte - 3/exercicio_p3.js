
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