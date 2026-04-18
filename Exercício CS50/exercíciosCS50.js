
//Exercice 1 - Hello User
function exer_01(){

    let user = prompt("Informe seu usuário");
    alert("Hello " + user);

};

//Exercice 2 - Soma simples
function exer_02(){

    let num1 = 0;
    let num2 = 0;
    let soma = 0;

    num1 = Number(prompt("Informe um número"));
    num2 = Number(prompt("Informe outro número"));

    soma = num1 + num2;

    alert("A soma entre o números resulta em: " + soma);

};

//Exercice 3 - Par ou Impár
function exer_03(){

    let number = 0;
    let condicao = false;

    number = Number(prompt("Informe um número"));

    if(number % 2 == 0){
    
        alert("O número " + number + " é par")
    } else {
    
        alert("O número " + number + " é impar");
    };


};

//Exercice 4 - Maior Número