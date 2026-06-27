const btn = document.getElementById("btnPdf");
const input = document.getElementById("imagem");

btn.onclick = () => input.click();

input.onchange = () => {

    const arquivo = input.files[0];

    if (!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = function(e){

        const img = new Image();

        img.onload = function(){

            const { jsPDF } = window.jspdf;

            const pdf = new jsPDF();

            pdf.addImage(img, "JPEG", 10, 10, 190, 250);

            pdf.save("MR_EDITORA.pdf");

        };

        img.src = e.target.result;

    };

    leitor.readAsDataURL(arquivo);

};