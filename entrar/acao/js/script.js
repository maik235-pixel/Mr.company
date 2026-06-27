const imagemInput = document.getElementById("imagemInput");

function selecionarImagem() {
    imagemInput.click();
}

imagemInput.addEventListener("change", async function () {

    const arquivo = this.files[0];

    if (!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = function (evento) {

        const img = new Image();

        img.onload = function () {

            const { jsPDF } = window.jspdf;

            const pdf = new jsPDF({
                orientation:
                    img.width > img.height
                        ? "landscape"
                        : "portrait",
                unit: "px",
                format: [img.width, img.height]
            });

            pdf.addImage(
                img,
                "JPEG",
                0,
                0,
                img.width,
                img.height
            );

            pdf.save("MR_DOC.pdf");

        };

        img.src = evento.target.result;
    };

    leitor.readAsDataURL(arquivo);
});

function abrirMercado() {
    window.location.href = "https://metar.ia.br";
}

function abrirLivro() {
    window.location.href = "https://metar.ia.br";
}