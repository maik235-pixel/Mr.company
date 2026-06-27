document.addEventListener("DOMContentLoaded", () => {
  const aceite = document.getElementById("aceiteTermos");
  const btn = document.getElementById("btnGerar");

  aceite.addEventListener("change", () => {
    btn.disabled = !aceite.checked;
    btn.classList.toggle("ativo", aceite.checked);
  });

  btn.addEventListener("click", () => {
    if (aceite.checked) {
      // Aqui entra a integração com Google OAuth
      alert("Login com Google será solicitado...");
      window.location.href = "paginas/preencher.html";
    }
  });
});
