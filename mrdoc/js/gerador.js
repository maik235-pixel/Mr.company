// Função para gerar PDF e JPG usando jsPDF + html2canvas
document.addEventListener("DOMContentLoaded", () => {
  const btnPDF = document.getElementById("btnPDF");
  const btnIMG = document.getElementById("btnIMG");
  const curriculo = document.getElementById("curriculoPreview");

  // Marca d'água
  function aplicarMarcaDagua(ctx, width, height) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.textAlign = "center";
    ctx.fillText("metar.ia.br", width / 2, height - 30);
  }

  // Gerar PDF
  btnPDF.addEventListener("click", () => {
    html2canvas(curriculo, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.setFontSize(10);
      pdf.setTextColor(150);
      pdf.text("metar.ia.br", pdfWidth / 2, pdf.internal.pageSize.getHeight() - 10, { align: "center" });
      pdf.save("curriculo_metar.pdf");
    });
  });

  // Gerar Imagem JPG
  btnIMG.addEventListener("click", () => {
    html2canvas(curriculo, { scale: 2 }).then(canvas => {
      const link = document.createElement("a");
      link.download = "curriculo_metar.jpg";
      link.href = canvas.toDataURL("image/jpeg", 1.0);
      link.click();
    });
  });
});
