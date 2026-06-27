const dados =
JSON.parse(
localStorage.getItem(
"curriculo"
)
);

const foto =
localStorage.getItem(
"fotoCurriculo"
);

document.getElementById(
"nome"
).innerText =
dados.nome || "";

document.getElementById(
"endereco"
).innerText =

`${dados.rua},
${dados.numero},
${dados.bairro}
 - ${dados.referencia}`;

document.getElementById(
"estadoCivil"
).innerText =

`Estado Civil:
${dados.estadoCivil}`;

document.getElementById(
"ensino"
).innerText =

`Escolaridade:
${dados.ensino}`;

document.getElementById(
"celular"
).innerText =

`Celular:
${dados.celular}`;

document.getElementById(
"email"
).innerText =

`E-mail:
${dados.email}`;

if(foto){

document.getElementById(
"fotoPerfil"
).src = foto;

}

const experiencias =
document.getElementById(
"experiencias"
);

function adicionarExperiencia(
cargo,
empresa,
tempo
){

if(!cargo) return;

const p =
document.createElement("p");

p.innerHTML =

`<strong>${cargo}</strong>
<br>
Empresa: ${empresa}
<br>
Tempo:
${tempo}`;

experiencias.appendChild(p);

}

adicionarExperiencia(
dados.cargo1,
dados.empresa1,
dados.tempo1
);

adicionarExperiencia(
dados.cargo2,
dados.empresa2,
dados.tempo2
);

adicionarExperiencia(
dados.cargo3,
dados.empresa3,
dados.tempo3
);

new QRCode(

document.getElementById(
"qrcode"
),

{
text:
"https://metar.ia.br",

width:90,

height:90

}

);

function gerarPDF(){

html2canvas(

document.getElementById(
"curriculoPreview"
)

).then(canvas=>{

const img =
canvas.toDataURL(
"image/png"
);

const pdf =
new jspdf.jsPDF(
"p",
"mm",
"a4"
);

pdf.addImage(
img,
"PNG",
0,
0,
210,
297
);

pdf.save(
`${dados.nome}_Curriculo.pdf`
);

});

}

function gerarJPG(){

html2canvas(

document.getElementById(
"curriculoPreview"
)

).then(canvas=>{

const link =
document.createElement(
"a"
);

link.download =
`${dados.nome}_Curriculo.jpg`;

link.href =
canvas.toDataURL(
"image/jpeg",
1
);

link.click();

});

}