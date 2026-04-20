
//Exercice 1 - Hello User
function exer_01() {

    let user = prompt("Informe seu usuário");
    alert("Hello " + user);

};

//Exercice 2 - Soma simples
function exer_02() {

    let num1 = 0;
    let num2 = 0;
    let soma = 0;

    num1 = Number(prompt("Informe um número"));
    num2 = Number(prompt("Informe outro número"));

    soma = num1 + num2;

    alert("A soma entre o números resulta em: " + soma);

};

//Exercice 3 - Par ou Impár
function exer_03() {

    let number = 0;

    number = Number(prompt("Informe um número"));

    if (number % 2 === 0) {

        alert("O número " + number + " é par")
    } else {

        alert("O número " + number + " é impar");
    };


};

//Exercice 4 - Maior Número
function exer_04() {

    let num1 = Number(prompt("Informe um número"));
    let num2 = Number(prompt("Informe outro número"));
    let num3 = Number(prompt("Informe mais um número"));

    if (num1 > num2 && num1 > num3) {

        alert("Número " + num1 + " é o maior")
    } else if (num2 > num1 && num2 > num3) {

        alert("Número " + num2 + " é o maior")
    } else {
        alert("Número " + num3 + " é o maior")
    };

};

//Exercice 5 - FizzBuzz
function exer_05() {

    for (let i = 1; i < 100; i++) {

        if (i % 3 === 0 && i % 5 === 0) {

            console.log("FizzBuzz");
        } else if (i % 3 === 0) {

            console.log("Fizz");
        } else if (i % 5 === 0) {

            console.log("Buzz");
        } else {
            console.log(i);
        };

    };

};


function exer_06() {

    let number = Number(prompt("Informe o tamanho da pirâmide"));

    for(let i = 0; i < number; i++) {
    
        let linha = "";

        for(let j = 0; j < number - i - 1; j++) {
            linha += " ";
        };

        for(let j = 0; j < i + 1; j++) {
            linha += "#";
        };

        console.log(linha);

    };

};
