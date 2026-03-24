
function mediaAcima(){

    let valor = [];
    let valor_acima = 0;
    let media = 0.0;

    for(let i = 0; i < 8; i++) {
        valor[i] = Number(prompt("Informe um valor"));
        media = media + valor[i];
    };

    media = media/8;


    for(let i = 0; i < 8; i++) {

        if (valor[i] > media) {
            valor_acima++;
        }
    };

    console.log("Media: " + media);
    console.log("Números Acima: " + valor_acima);

};

//mediaAcima()