
function tabuada(){

    let numero = Number(prompt("Informe um número"));
    let valor = 0;

    for(let i = 0; i < 10; i++){
        
        valor = numero * (i+1);
        console.log(valor);

    };
};

//tabuada()