
function exercicio_m2_03() {

    let altura = 0;
    let peso = 0;
    let IMC = 0;

    alert("Vamos calcular seu IMC");

    peso = parseFloat(prompt("Informe seu peso"));
    altura = parseFloat(prompt("Informe sua altura"));

    IMC = peso/(altura*altura);

    alert("Seu IMC é de: " + IMC);

};

//exercicio_m2_03()