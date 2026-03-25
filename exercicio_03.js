
function contadorParIpar(){

    let numero = 0;
    let pares = 0;
    let impares = 0;

    do{
        
        numero = Number(prompt("Informe um valor: [digite 0 para finalizar]"))

        if(numero == 0){
            break
        } else if(numero % 2 == 0) {
            pares++;  
        } else {
            impares++;
        };

    } while(numero != 0);

    console.log(pares);
    console.log(impares);

};

//contadorParIpar()