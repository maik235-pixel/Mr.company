const googleBtn = document.querySelector(".btn-google");
const criarBtn = document.querySelector(".btn-criar");
const termos = document.getElementById("termos");

function validarTermos() {

    if (!termos.checked) {

        alert(
            "Você precisa aceitar os Termos e Políticas do Meta IA."
        );

        return false;
    }

    return true;
}

googleBtn.addEventListener("click", () => {

    if (!validarTermos()) return;

    console.log("Login Google");
});

criarBtn.addEventListener("click", () => {

    if (!validarTermos()) return;

    console.log("Criar Conta");
});