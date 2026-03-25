
function somaArray(){

    const vetor = [];
    let soma = 0;
    let i = 0;

    do{
        vetor[i] = Number(prompt("Informe um valor para o Array - Para Finalizar digite [0]"));
        i ++
    } while(vetor[i - 1] != 0);
    

    for(let i = 0; i < vetor.length; i++){
        
        soma += vetor[i];

    };

    alert("A soma dos valores do Array é " + soma);

};

somaArray()