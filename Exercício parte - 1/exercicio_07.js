
function ordenacaoSemSort() {

    let valor = [];
    let temp = 0;

    for (let i = 0; i < 5; i++) {

        valor[i] = Number(prompt("Informe um valor"))

    };

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {

            if (valor[j] > valor[j + 1]) {

                temp = valor[j];
                valor[j] = valor[j + 1];
                valor[j + 1] = temp;

            };
        };
    };

    for(let i = 0; i < 5; i++){

        console.log(valor[i]);

    };

};

//ordenacaoSemSort()