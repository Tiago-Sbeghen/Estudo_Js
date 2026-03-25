
function loginSismples() {

    let condicao = false;

    do {

        let usuario = prompt("Informe o nome de usuário");
        let senha = prompt("Informe a senha");

        if (usuario == "admin" && senha == "1234") {
            condicao = true;
        } else {
            alert("Login Inválido");
        };


    } while (condicao == false);

    alert("Acesso permitido")

}

loginSismples()