const dropArea =
document.getElementById(
"dropArea"
);

const fotoInput =
document.getElementById(
"foto"
);

const fotoPreview =
document.getElementById(
"fotoPreview"
);

dropArea.onclick = () =>
fotoInput.click();

fotoInput.addEventListener(
"change",
processarFoto
);

dropArea.addEventListener(
"dragover",
e => {

e.preventDefault();

}
);

dropArea.addEventListener(
"drop",
e => {

e.preventDefault();

const arquivo =
e.dataTransfer.files[0];

if(!arquivo) return;

salvarFoto(arquivo);

}
);

function processarFoto(e){

const arquivo =
e.target.files[0];

if(!arquivo) return;

salvarFoto(arquivo);

}

function salvarFoto(arquivo){

const leitor =
new FileReader();

leitor.onload =
function(event){

const fotoBase64 =
event.target.result;

localStorage.setItem(
"fotoCurriculo",
fotoBase64
);

fotoPreview.src =
fotoBase64;

fotoPreview.style.display =
"block";

};

leitor.readAsDataURL(
arquivo
);

}

function visualizarCurriculo(){

const dados = {

nome:
document.getElementById("nome").value,

rua:
document.getElementById("rua").value,

numero:
document.getElementById("numero").value,

bairro:
document.getElementById("bairro").value,

referencia:
document.getElementById("referencia").value,

estadoCivil:
document.getElementById("estadoCivil").value,

ensino:
document.getElementById("ensino").value,

cargo1:
document.getElementById("cargo1").value,

empresa1:
document.getElementById("empresa1").value,

tempo1:
document.getElementById("tempo1").value,

cargo2:
document.getElementById("cargo2").value,

empresa2:
document.getElementById("empresa2").value,

tempo2:
document.getElementById("tempo2").value,

cargo3:
document.getElementById("cargo3").value,

empresa3:
document.getElementById("empresa3").value,

tempo3:
document.getElementById("tempo3").value,

celular:
document.getElementById("celular").value,

email:
document.getElementById("email").value

};

localStorage.setItem(
"curriculo",
JSON.stringify(dados)
);

window.location.href =
"preview.html";

}