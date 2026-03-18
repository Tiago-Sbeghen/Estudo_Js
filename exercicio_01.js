
function maiorMenor(){

    let numero = [];
    let temp = 0;

    for(let i = 0; i < 10; i++) {
        numero[i] = Number(prompt("Informe um número"));
    };

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++){

            if(numero[j] < numero[j + 1]) {

                temp = numero[j];
                numero[j] = numero[j + 1];
                numero[j+ 1] = temp;
            }
        }
    }

    console.log("Maior: " + numero[0]);
    console.log("Menor: " + numero[9]);

};

maiorMenor()